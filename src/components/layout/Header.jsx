import styled from "styled-components";
import { CommonSC } from "../../../styles/components";
import { FlexSC } from "../../../styles/components";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <FlexSC.FlexRow justify="flex-start" gap="20px">
          <CommonSC.Circle color="#fff" />
          <h2>kanghyewon</h2>
        </FlexSC.FlexRow>
      </HeaderInner>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;

export const HeaderInner = styled.section`
  position: fixed;
  width: 100%;
  height: 70px;
  max-width: 768px;
  padding: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(26px);
  border-radius: 16px;

  h2 {
    font-size: 20px;
  }
`;

export default Header;
