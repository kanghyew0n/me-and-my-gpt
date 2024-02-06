import styled from "styled-components";
import Header from "./Header";

const Layout = ({ children, onSubmit }) => {
  return (
    <LayoutContainer>
      <Header />
      <BodyInner>{children}</BodyInner>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  width: 100%;
  padding-top: 20px; // 헤더의 블러 부분 제외하고 위로 보이지 않게 하기위해 설정
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const BodyInner = styled.div`
  width: 100%;
  max-width: 768px;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export default Layout;
