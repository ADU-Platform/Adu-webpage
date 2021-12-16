import { Link } from "react-router-dom";
import styled from "styled-components";

import { FontWeight } from "../types/Text";

const Frame = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
`;

interface Props {
  text: string;
  fontSize?: string;
  fontWeight?: FontWeight;
}
function Text(p: Props) {
  return <Frame style={p}>{p.text}</Frame>;
}

export default Text;
