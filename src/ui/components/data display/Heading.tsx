import styled from "styled-components";
import { FontSizes, FontWeights } from "../../styles/typography";

interface Props {
  value: string;

  fontSize?: FontSizes;
  fontWeight?: FontWeights;
}
export default function Heading(p: Props) {
  return (
    <Frame {...p} style={p}>
      {p.value}
    </Frame>
  );
}

const Frame = styled.span<Props>``;
