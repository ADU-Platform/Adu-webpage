import styled from "styled-components";
import { FontSizes, FontWeights } from "../../styles/typography";

interface Props {
  icon: JSX.Element;

  fontSize?: FontSizes;
  fontWeight?: FontWeights;
}
export default function Icon(p: Props) {
  return (
    <Frame {...p} style={p}>
      {p.icon}
    </Frame>
  );
}

const Frame = styled.span<Props>``;
