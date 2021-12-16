import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontWeight } from "../types/Text";

const Frame = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
`;

interface IProps {
  to: string;
  fontSize: string;
  fontWeight?: FontWeight;

  children: string;
}
function TextForLink(p: IProps) {
  return (
    <Frame to={p.to} style={{ ...p }}>
      {p.children}
    </Frame>
  );
}

export default TextForLink;
