import { VscSearch } from "react-icons/vsc";
import styled from "styled-components";
import { BorderColor, ForegroundColor } from "../types/Colors";

interface Props {
  vertical?: boolean;
  placeholder?: string;
  label?: string;
  inputProps?: any;
  type?: string;
}
const Frame = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-direction: ${(p) => (p.vertical ? "column" : "row")};
  justify-content: center;
  align-items: ${(p) => (p.vertical ? "flex-start" : "center")};
  user-select: none;
  color: ${ForegroundColor.Dark};
  gap: 10px;
  input {
    width: 100%;
    background-color: transparent;
  }
`;
export function Input(props: Props) {
  return (
    <Frame {...props}>
      <span className="label">{props.label}</span>
      <input
        type={props.type}
        {...props.inputProps}
        placeholder={props.placeholder}
      />
    </Frame>
  );
}

interface PropsForSearch {}
const FrameForSearch = styled(Frame)<PropsForSearch>`
  width: 100%;
  font-size: 14px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 10px;

  padding: 15px 15px;

  border: 1px solid ${BorderColor.Dark};

  svg {
    font-size: 24px;
  }

  input {
    width: 100%;
    border: 0px solid;
    background-color: transparent;
    outline: none;

    ::placeholder {
      font-style: italic;
    }
  }
`;
export function InputForSearch(props: PropsForSearch & Props) {
  return (
    <FrameForSearch {...props}>
      <VscSearch />
      <input {...props} />
    </FrameForSearch>
  );
}
