import styled from "styled-components";
import CopyIcon from "../../assets/copy.svg";
import Notice from "./Notice";
import { useEffect, useState } from "react";

const Answer = ({ name }) => {
  const [isCopy, setIsCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(name)
      .then(() => {
        setIsCopy(true);
      })
      .catch((error) => {
        setIsCopy(false);
        console.error("텍스트 복사 실패", error);
      });
  };

  useEffect(() => {
    return () => {
      setIsCopy(false);
    };
  }, []);

  return (
    <>
      <AnswerContainer onClick={handleCopy}>
        <span>{name}</span>
        <img src={CopyIcon} />
        {isCopy && <Notice />}
      </AnswerContainer>
    </>
  );
};

const AnswerContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 16px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  background-color: #a5a6aa;
  cursor: pointer;
`;

export default Answer;
