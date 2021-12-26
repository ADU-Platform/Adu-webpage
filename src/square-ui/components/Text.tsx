import { Link } from "react-router-dom";
import styled from "styled-components";
import { StandardProps } from "../styles/Standard";

interface Props {}
const Frame = styled.span<Props>`
  a {
    cursor: default;
  }
`;
export default function Text(p: Props & StandardProps) {
  return (
    <Frame style={p}>
      <Link to={p.href || ""}>{p.children}</Link>
    </Frame>
  );
}
