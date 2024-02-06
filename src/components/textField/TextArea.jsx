import { useState } from "react";
import { Input, Button } from "antd";
import styled from "styled-components";

const CommonTextArea = ({ isLoading, onSubmit }) => {
  const [text, setText] = useState("");
  const { TextArea } = Input;

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <TextAreaContainer>
      <TextArea
        value={text}
        onChange={handleChangeText}
        placeholder="오늘 하루 어땠냐"
        style={{
          resize: "none",
          height: 80,
          padding: "15px 20px",
          fontSize: "16px",
          borderRadius: "16px",
          border: "1px solid #4F4F4F",
          color: "#fff",
          backgroundColor: "transparent",
        }}
      />
      <Button loading={isLoading} onClick={() => onSubmit(text)}>
        GPT 일해라
      </Button>
    </TextAreaContainer>
  );
};

const TextAreaContainer = styled.div`
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.03);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;

  textarea::placeholder {
    color: #666;
    font-weight: 400;
  }
`;

export default CommonTextArea;
