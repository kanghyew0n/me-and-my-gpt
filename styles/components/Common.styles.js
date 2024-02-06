import styled from "styled-components";

export const Circle = styled.div`
  width: ${(props) => props.width || "18px"};
  height: ${(props) => props.height || "18px"};
  border-radius: 50px;
  background-color: ${(props) => props.color || "#fff"};
`;

export const CircleStroke = styled.div`
  width: ${(props) => props.width || "18px"};
  height: ${(props) => props.height || "18px"};
  border-radius: 50px;
  border: ${(props) => `1px solid ${props.color}` || "1px solid #fff"};
`;
