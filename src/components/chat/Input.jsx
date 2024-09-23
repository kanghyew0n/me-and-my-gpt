import { useState } from "react";
import styled from "styled-components";
import SearchIcon from "../../assets/search.svg";
import BackIcon from "../../assets/back.svg";

const CommonInput = ({ data, onSubmit, setData }) => {
  const [text, setText] = useState("");

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleReset = () => {
    setText('');
    setData("");
  }

  return (
    <TextAreaContainer onSubmit={(e) => onSubmit(e, text)}>
      <Input
        value={text}
        onChange={handleChangeText}
        placeholder="예시: 회원가입 input에 사용되는 공통 인증 input 컴포넌트명"
        readOnly={Boolean(data)}
      />
      {!Boolean(data) && <img src={SearchIcon} />}
      {Boolean(data) && <img src={BackIcon} onClick={handleReset} />}
    </TextAreaContainer>
  );
};

const TextAreaContainer = styled.form`
  position: relative;
  padding-top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 30px;
    height: 30px;
    position: absolute;
    left: 20px;
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 64px;
  padding-left: 60px;
  font-size: 20px;
  color: #000;
  border: none;
  border-radius: 16px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #c5c6cc;
  }
`;

export default CommonInput;
