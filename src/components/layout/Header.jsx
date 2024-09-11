import styled from "styled-components";
import { FlexSC } from "../../../styles/components";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <FlexSC.FlexRow gap="20px">
          <h2>me-and-my-gpt </h2>
        </FlexSC.FlexRow>
      </HeaderInner>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;

export const HeaderInner = styled.section`
  width: 100%;
  height: 70px;
  max-width: 768px;
  padding: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(78 78 78 / 23%);
  backdrop-filter: blur(10px);
  border-radius: 16px;

  h2 {
    font-size: 20px;
  }
`;

export default Header;
