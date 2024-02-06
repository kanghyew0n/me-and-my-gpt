import styled from "styled-components";
import { CommonSC, FlexSC } from "../../../styles/components";

const ChatCard = ({ circleColor, title, content }) => {
  return (
    <ChatCardContainer>
      <FlexSC.FlexRow justify="flex-start" align="flex-start" gap="20px">
        <CommonSC.Circle color={circleColor} width="12px" height="12px" />
        <FlexSC.FlexColumn
          align="flex-start"
          gap="10px"
          style={{ marginTop: "-3px" }}
        >
          <h3>{title}</h3>

          {typeof content === "string" ? (
            <p>{content}</p>
          ) : (
            <FlexSC.FlexColumn align="flex-start">
              {content?.map((ele, idx) => (
                <FlexSC.FlexRow
                  key={`content-${idx}`}
                  align="flex-start"
                  justify="flex-start"
                  gap="10px"
                >
                  <CommonSC.CircleStroke
                    color={circleColor}
                    width="12px"
                    height="12px"
                  />
                  <p>{ele}</p>
                </FlexSC.FlexRow>
              ))}
            </FlexSC.FlexColumn>
          )}
        </FlexSC.FlexColumn>
      </FlexSC.FlexRow>
    </ChatCardContainer>
  );
};

const ChatCardContainer = styled.section`
  width: 100%;
  padding: 20px;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.03);

  h3 {
    font-size: 16px;
    font-weight: 900;
    line-height: 1.4;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    word-break: keep-all;
  }
`;

export default ChatCard;
