import { Link } from "react-router-dom";
import styled from "styled-components";

//styles
import { FontSizes, FontWeights } from "./typography";

export interface StandardProps {
  //link
  href?: string;

  //font
  fontWeight?: FontWeights;
  fontSize?: FontSizes;

  //other
  disabled?: boolean;
  hidden?: boolean;
  onClick?: () => void;
  children?: any;
}
const Frame = styled.span<StandardProps>``;
export default function Component(p: StandardProps) {
  return <></>;
}
