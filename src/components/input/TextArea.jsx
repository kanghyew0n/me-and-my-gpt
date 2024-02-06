import { useState } from "react";
import { Input, Button } from "antd";
import { FlexSC } from "../../../styles/components";
const { TextArea } = Input;

const CommonTextArea = ({ isLoading, onSubmit }) => {
  const [text, setText] = useState("");

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <FlexSC.FlexColumn align="flex-end" gap="10px">
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
    </FlexSC.FlexColumn>
  );
};

export default CommonTextArea;
