import { Link } from "react-router-dom";
import styled from "styled-components";

//styles
import { FontSizes, FontWeights } from "../styles/typography";

interface Props {
  //variant
  text?: boolean;
  contained?: boolean;
  outlined?: boolean;

  //link
  href?: string;

  //font
  fontWeight?: FontWeights;
  fontSize?: FontSizes;

  //other
  full?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  onClick?: () => void;
  children?: any;
}

const Frame = styled.button<Props>``;
export function Button(p: Props) {
  return (
    <Frame {...p}>
      <Link to={p.href || ""}>{p.children}</Link>
    </Frame>
  );
}
