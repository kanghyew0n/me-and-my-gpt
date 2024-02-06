import styled from "styled-components";

export const FlexBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  align-items: ${({ align }) => (align ? align : "center")};
  flex-wrap: ${({ wrap }) => (wrap ? wrap : "nowrap")};
  gap: ${({ gap }) => gap && gap};
`;

export const FlexRow = styled(FlexBox)`
  flex-direction: row;
`;

export const FlexColumn = styled(FlexBox)`
  flex-direction: column;
`;

