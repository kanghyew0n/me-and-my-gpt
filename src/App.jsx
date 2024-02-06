import styled from "styled-components";
import { useState, useEffect } from "react";

import { callGpt } from "./api/gpt";
import { GPT_PARAM } from "./utils/data";

import Layout from "./components/layout/Layout";
import ChatCard from "./components/chat/ChatCard";

import { FlexSC } from "../styles/components";
import CommonTextArea from "./components/textField/TextArea";

const DIARY_ITEM = {
  emotional_result: { title: "감성회고", color: "red" },
  emotional_content: { title: "내가 느낀 감정", color: "orange" },
  analysis: { title: "분석", color: "yellow" },
  action_list: { title: "조언", color: "green" },
};

function App() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState("");

  const handleClickGptCall = async (text) => {
    try {
      setIsLoading(true);
      return setData(GPT_PARAM); // 테스트용
      const message = await callGpt({ prompt: `${text}` });
      setData(message);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const today = new Date();

    const year = today.getFullYear(); // 년도
    const month = today.getMonth() + 1; // 월
    const date = today.getDate(); // 날짜
    setDate(year + "/" + month + "/" + date);
  }, []);

  return (
    <Layout onSubmit={handleClickGptCall}>
      {isLoading ? <div>loading...</div> : ""}
      <ContentContainer>
        {!isLoading && data && (
          <>
            <DiaryDate>{date}</DiaryDate>
            <DiaryTitle>{data.title}</DiaryTitle>
            <ImageContainer>
              <img src={data?.thumbnail} alt="diary-image" />
            </ImageContainer>
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
      </ContentContainer>
      <CommonTextArea onSubmit={handleClickGptCall} />
    </Layout>
  );
}

const DiaryDate = styled.h3`
  padding-left: 10px;
  font-size: 16px;
  color: #999;
  padding-bottom: 5px;
`;
const DiaryTitle = styled.h1`
  padding-left: 10px;
  font-size: 20px;
  padding-bottom: 30px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 20px;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 16px;
  }
`;

const ContentContainer = styled.section`
  // header = 70 + 20
  // footer = 122 + 20 + 20
  // content = -70 (헤더 공간 여백)
  // total = 252

  max-height: calc(100vh - 182px);
  min-height: calc(100vh - 182px);
  padding: 120px 0 50px 0;
  overflow-y: auto;
`;

export default App;
