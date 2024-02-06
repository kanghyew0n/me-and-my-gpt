import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

// header = 70 + 20
// footer = 122 + 20 + 20
// total = 252

const Layout = ({ children,onSubmit }) => {
  return (
    <LayoutContainer>
      <Header />
      <BodyInner>
        <ContentContainer>{children}</ContentContainer>
      </BodyInner>
      <Footer onSubmit={onSubmit}/>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.section`
  max-height: calc(100vh - 252px);
  min-height: calc(100vh - 252px);
  overflow-y: auto;
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
