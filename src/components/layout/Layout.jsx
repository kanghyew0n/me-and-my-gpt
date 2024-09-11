import styled from "styled-components";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <BodyInner>{children}</BodyInner>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
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
