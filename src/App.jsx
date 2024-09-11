import { useState } from "react";
import styled from "styled-components";
import { callGpt } from "./api/gpt";
import Layout from "./components/layout/Layout";
import Answer from "./components/chat/Answer";
import CommonInput from "./components/chat/Input";

// const TEST_MESSAGE = {
//   variable_names: [
//     "emotion",
//     "feelings",
//     "mood",
//     "stateOfMind",
//     "sentiment",
//     "emotionalState",
//     "mentalState",
//     "innerFeeling",
//     "spirit",
//     "soul",
//   ],
// };


function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleClickGptCall = async (e, text) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const message = await callGpt({ prompt: `${text}` });

      
      if (message) {
        try {
          // setData(message); // test
          setData(JSON.parse(message));
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
    <Layout>
      <TitleWrapper hidden={Boolean(data)}>
        <h1>변수고민 이제 그만!!!</h1>
        <h3>
          고민되는 변수명, 함수명, 컴포넌트명 모두 물어봐주세요! 원하는
          요구사항을 자세하게 알려주세요!
        </h3>
      </TitleWrapper>
      <CommonInput
        onSubmit={handleClickGptCall}
        data={data}
        setData={setData}
      />
      <ContentContainer view={Boolean(data)}>
        {/* {isLoading ? <div>loading...</div> : ""} */}
        {!isLoading && data && (
          <AnswerWrapper>
            {data.variable_names.map((item, idx) => {
              return <Answer key={`variable-name-${idx}`} name={item} />;
            })}
          </AnswerWrapper>
        )}
      </ContentContainer>
    </Layout>
  );
}

const TitleWrapper = styled.section`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -130px);

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  opacity: ${({ hidden }) => (hidden ? 0 : 1)};
  transition: opacity 0.2s ease-in-out;

  h1 {
    font-size: 54px;
    font-weight: 700;
    text-align: center;
    color: #000;
  }

  h3 {
    margin-top: 20px;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    color: #000;
  }
`;

const ContentContainer = styled.div`
  height: ${({ view }) => (view ? '400px' : 0)};
  opacity: ${({ view }) => (view ? 1 : 0)};
  margin-top: 50px;
  transition: all 0.3s ease-in-out;
`;

const AnswerWrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
`;

export default App;
