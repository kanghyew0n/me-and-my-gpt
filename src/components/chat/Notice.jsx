import styled, { keyframes } from "styled-components";

const Notice = () => {
  return <StyledNotice>COPY !</StyledNotice>;
};

const boxFade = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
const StyledNotice = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 10px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  backdrop-filter: blur(1px);
  opacity: 0;

  animation: ${boxFade} 1s;
`;

export default Notice;
