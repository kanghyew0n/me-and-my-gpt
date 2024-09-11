import { useState } from "react";
import styled from "styled-components";
import { callGpt } from "./api/gpt";
import Layout from "./components/layout/Layout";
import Answer from "./components/chat/Answer";
import CommonTextArea from "./components/textField/TextArea";

function App() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClickGptCall = async (text) => {
    try {
      setIsLoading(true);

      const message = await callGpt({ prompt: `${text}` });

      if (message) {
        try {
          setData(JSON.parse(message)); // 문자열을 JSON으로 변환
        } catch (e) {
          console.error("JSON 파싱 오류:", e);
        }
      }
    } catch (err) {
      console.log("GPT 호출 오류:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout onSubmit={handleClickGptCall}>
      {isLoading ? <div>loading...</div> : ""}
      <ContentContainer>
        {!isLoading && data && (
          <AnswerWrapper>
            {data.variable_names.map((item, idx) => {
              return <Answer key={`variable-name-${idx}`} name={item} />;
            })}
          </AnswerWrapper>
        )}
      </ContentContainer>
      <CommonTextArea onSubmit={handleClickGptCall} />
    </Layout>
  );
}

const ContentContainer = styled.section`
  max-height: calc(100vh - 182px);
  min-height: calc(100vh - 182px);
  padding: 120px 0 50px 0;
  overflow-y: auto;
`;

const AnswerWrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
`;

export default App;
