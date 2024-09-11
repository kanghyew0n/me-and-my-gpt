import styled from "styled-components";
import CopyIcon from "../../assets/copy.svg";

const Answer = ({ name }) => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(name)
      .then(() => {
        alert("텍스트가 복사되었습니다.");
      })
      .catch((error) => {
        console.error("텍스트 복사 실패", error);
      });
  };

  return (
    <AnswerContainer onClick={handleCopy}>
      <span>{name}</span>
      <img src={CopyIcon} />
    </AnswerContainer>
  );
};

const AnswerContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 16px;
  color: #fff;
  background-color: rgb(255 255 255 / 3%);
  cursor: pointer;

  img {
  }
`;

export default Answer;
