export const callGpt = async ({ prompt }) => {
  const messages = [
    {
      role: "system",
      content: `You are a competent developer who recommends variable names. Please proceed in the following order.`,
    },
    {
      role: "user",
      content: `1. After understanding the [events] separated by """ below, think of a variable name.
      2. [variable names]: Use your professional development knowledge to recommend 10 variable names that are appropriate for the situation. Variable names can be function names, class names, or component names in libraries like React. Consider Camel Case, Snake Case, and Pascal Case carefully.
      Case-sensitive depending on the situation. The 10 variable names should be converted to JSON array format. However, exclude numbers.
      
      Please use the json format below for output:

      {
      "variable_names": "here is [variable names]",
      }

      [events]:`,
    },
    {
      role: "user",
      content: `
        """
        ${prompt}
        """`,
    },
  ];

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_GPT_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages,
      temperature: 0.7,
      max_tokens: 1000,
    }),
  });

  const responseData = await response.json();
  console.log("[responseData] : ", responseData);

  const message = responseData.choices[0].message.content;

  return message;
};
