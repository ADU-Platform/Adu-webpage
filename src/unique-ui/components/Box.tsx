import { Link } from "react-router-dom";
import styled from "styled-components";

//types
import { BackgroundColor, BorderColor } from "../types/Color";

interface Props {
  width?: string;
  height?: string;
  backgroundColor?: BackgroundColor;
  borderWidth?: string;
  borderRadius?: string; //Must be pixel.
  borderColor?: BorderColor;
  borderTopColor?: BorderColor;
  borderBottomColor?: BorderColor;
  borderLeftColor?: BorderColor;
  borderRightColor?: BorderColor;
  opacity?: number;
  shadowOpacity?: number;
  padding?: string;

  children?: React.ReactElement | React.ReactElement[];

  flexDirection?: "column" | "row";
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
}
const Frame = styled.div.attrs(({ style }: { style: Props }) => {
  style: style;
})`
  width: ${(p) => p.style?.width || "100%"};
  height: ${(p) => p.style?.height || "100%"};
  border: 0px solid;
  border-width: ${(p) => p.style?.borderWidth};

  border-radius: ${(p) => p.style?.borderRadius};

  background-color: ${(p) =>
    p.style?.backgroundColor || BackgroundColor.Default};
  border-color: ${(p) => p.style?.borderColor || BackgroundColor.Default};
  border-left-color: ${(p) =>
    p.style?.borderLeftColor || BackgroundColor.Default};
  border-right-color: ${(p) =>
    p.style?.borderRightColor || BackgroundColor.Default};

  box-shadow: 0px 3px 6px rgb(0, 0, 0, ${(p) => p.style?.shadowOpacity || 0});

  display: flex;
  flex-direction: ${(p) => p.style?.flexDirection};
  justify-content: ${(p) => p.style?.justifyContent || "center"};
  align-items: ${(p) => p.style?.alignItems || "center"};
  gap: ${(p) => p.style?.gap || 0};
`;
function Box(p: Props) {
  return <Frame style={p}>{p.children}</Frame>;
}

const FrameForLink = styled(Frame)``;
interface PropsForLink extends Props {
  to: string;
}
function BoxForLink(p: PropsForLink) {
  return (
    <FrameForLink style={p} as={Link} to={p.to}>
      {p.children}
    </FrameForLink>
  );
}

const FrameForIcon = styled(Frame)``;
interface PropsForIcon extends Props {
  fontSize: string;

  children: React.ReactElement;
}
function BoxForIcon(p: PropsForIcon) {
  return <FrameForIcon style={p}>{p.children}</FrameForIcon>;
}

export { Box, BoxForLink, BoxForIcon };
