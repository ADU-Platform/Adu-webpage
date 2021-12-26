import { BarLoader } from "react-spinners";
import styled from "styled-components";

interface Props {
  state?: boolean;
}
export function Loading(props: Props) {
  return (
    <Frame {...props}>
      <BarLoader loading={props.state || false} width="100vw" />
    </Frame>
  );
}

const Frame = styled.div<Props>`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
`;
