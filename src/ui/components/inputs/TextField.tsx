import styled, { css } from "styled-components";
import {
  BackgroundColor,
  ForegroundColor,
} from "../../../square-ui/styles/Colors";
import { FontSizes, FontWeights } from "../../styles/typography";

interface Props {
  placeholder?: string;

  fontSize?: FontSizes;
  fontWeight?: FontWeights;

  //for back
  type?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function TextField(p: Props) {
  return (
    <Frame {...p} style={p}>
      <input type={p.type} value={p.value} onChange={p.onChange} />
    </Frame>
  );
}

const Frame = styled.div<Props>`
  display: flex;
  align-items: center;

  border: 1px solid ${ForegroundColor.Default};
  padding: 1px;

  input {
    border: none;
    background-color: ${BackgroundColor.Default};
    outline: none;
  }
  span {
    position: relative;
  }
`;
