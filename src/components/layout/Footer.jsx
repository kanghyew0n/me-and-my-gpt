import styled from "styled-components";
import CommonTextArea from "../input/TextArea";

const Footer = ({onSubmit}) => {
  return (
    <FooterContainer>
      <CommonTextArea onSubmit={onSubmit}/>
    </FooterContainer>
  );
};

const FooterContainer = styled.section`
  width: 100%;
  max-width: 768px;
  margin: 20px 0;
`;

export default Footer;
