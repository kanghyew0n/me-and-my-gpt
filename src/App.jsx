import styled from "styled-components";
import { useState } from "react";
import { callGpt } from "./api/gpt";
import { dummy } from "./utils/data";
import Layout from "./components/layout/Layout";
import ChatCard from "./components/chat/ChatCard";
import { FlexSC } from "../styles/components";

const DIARY_ITEM = {
  emotional_result: { title: "감성회고", color: "red" },
  emotional_content: { title: "내가 느낀 감정", color: "orange" },
  analysis: { title: "분석", color: "yellow" },
  action_list: { title: "조언", color: "green" },
};

function App() {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleClickGptCall = async (text) => {
    try {
      setIsLoading(true);
      const message = await callGpt({ prompt: `${text}` });
      console.log(message)
      setData(JSON.parse(message));
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <Layout onSubmit={handleClickGptCall}>
      {isLoading ? <div>loading...</div> : ""}

      {!isLoading && data && (
        <>
          <DiaryTitle>{data.title}</DiaryTitle>
          <FlexSC.FlexColumn align="flex-start" gap="20px">
            {Object.keys(DIARY_ITEM).map((item, idx) => (
              <ChatCard
                key={`diary-item-${idx}`}
                circleColor={DIARY_ITEM[`${item}`].color}
                title={DIARY_ITEM[`${item}`].title}
                content={data[`${Object.keys(DIARY_ITEM)[idx]}`]}
              />
            ))}
          </FlexSC.FlexColumn>
        </>
      )}

      {/* <CommonTextArea isLoading={isLoading} onSubmit={handleClickGptCall} /> */}
      {/* <div>prompt: {data.summary}</div> */}
      {/* <div>title : {data.title}</div> */}
      {/* <img src={data.thumbnail} /> */}
    </Layout>
  );
}

const DiaryTitle = styled.h1`
  padding-left: 10px;
  font-size: 20px;
  margin: 50px 0 25px 0;
`;

export default App;
