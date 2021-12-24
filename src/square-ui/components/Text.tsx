import { Link } from "react-router-dom";
import styled from "styled-components";
import { BackgroundColor, ForegroundColor } from "../types/Colors";
import { Size } from "../types/Size";

interface Props {
  size?: Size;
  dark?: boolean;
  children: any;
  hidden?: boolean;
}
const Frame = styled.span<Props>`
  color: ${(p) => (p.dark ? BackgroundColor.Light : ForegroundColor.Dark)};
  font-size: ${(p) => {
    let size = 17;
    if (p.size) size *= p.size * 1.5;

    return `${size}px`;
  }};
`;

export function Text(props: Props) {
  return <Frame {...props}>{props.children}</Frame>;
}

interface PropsForLink {
  to: string;
}
const FrameForLink = styled(Frame)<PropsForLink>``;
export function TextForLink(props: PropsForLink & Props) {
  return (
    <FrameForLink as={Link} {...props}>
      {props.children}
    </FrameForLink>
  );
}

interface PropsForIcon {}
const FrameForIcon = styled(Frame)<PropsForIcon>``;
export function TextForIcon(props: PropsForIcon & Props) {
  return <FrameForIcon {...props}></FrameForIcon>;
}
