import styled from "styled-components";
import { ForegroundColor } from "../types/Colors";

interface Props {
  vertical?: boolean;
  horizontal?: boolean;
}
const Frame = styled.div<Props>`
  width: ${(p) => (p.vertical ? "1px" : "100%")};
  height: ${(p) => (p.vertical ? "100%" : "1px")};

  background-color: ${ForegroundColor.Dimmest};
`;
export function Divider() {
  return <Frame></Frame>;
}
