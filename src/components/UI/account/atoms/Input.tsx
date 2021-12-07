import styled from "styled-components";

const Frame = styled.input`
  width: 266px;
  height: 32px;

  background-color: #ffffff;
  border: 1px solid ${(p) => p.theme.outline.dimmer};

  margin-top: 7px;
`;

interface IProps {
  msg?: string;
  type?: string;
}

function Input({ msg, type }: IProps) {
  return <Frame placeholder={msg} type={type}></Frame>;
}

export default Input;
