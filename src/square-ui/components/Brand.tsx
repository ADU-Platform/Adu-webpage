import { Link } from "react-router-dom";
import styled from "styled-components";
import { ForegroundColor } from "../types/Colors";

interface Props {
  to: string;
  children: any;
}
const Frame = styled(Link)`
  font-size: 30px;
  font-weight: 600;

  color: ${ForegroundColor.Dark};
`;

function Brand(props: Props) {
  return <Frame to={props.to}>{props.children}</Frame>;
}

export { Brand };
