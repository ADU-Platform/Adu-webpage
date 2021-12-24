import { Link } from "react-router-dom";
import styled from "styled-components";

import { BackgroundColor, BorderColor, ForegroundColor } from "../types/Colors";
import { Size } from "../types/Size";

interface Props {
  size?: Size;
  outline?: boolean;
  full?: boolean;
  dark?: boolean;
  disabled?: boolean;
  textAlign?: "center" | "left" | "right";
  hidden?: boolean;
  
  onClick?: () => void;

  children?: any;
}

const Frame = styled.button<Props>`
  width: ${(p) => (p.full ? "100%" : null)};
  padding: 16px;

  font-size: ${(p) => {
    let size = 17;
    if (p.size) size *= p.size * 1.5;

    return `${size}px`;
  }};
  transform: scale(${(p) => p.size});

  background-color: ${(p) =>
    p.dark ? ForegroundColor.Default : BackgroundColor.Default};
  color: ${(p) => (p.dark ? BackgroundColor.Default : ForegroundColor.Default)};

  border: ${(p) => (p.outline ? "1px solid" : "0px solid")};
  border-color: ${(p) => (p.dark ? ForegroundColor.Default : BorderColor.Dark)};

  user-select: none;

  text-align: ${(p) => p.textAlign || "center"};
  &:hover {
  }
  &:active {
    background-color: ${(p) =>
      p.dark ? ForegroundColor.Dimmer : BackgroundColor.Light};
  }

  opacity: ${(p) => (p.disabled ? 0.5 : 1)};
`;
export function Button(props: Props) {
  return <Frame {...props}>{props.children}</Frame>;
}

interface PropsForLink {
  to: string;
}
const FrameForLink = styled(Frame)<PropsForLink>`
  a {
    width: 100%;
    height: 100%;
  }
  pointer-events: ${(p) => (p.disabled ? "none" : null)};
`;
export function ButtonForLink(props: PropsForLink & Props) {
  return (
    <FrameForLink {...props}>
      <Link to={props.to}>{props.children}</Link>
    </FrameForLink>
  );
}

interface PropsForIcon {
  iconSize?: string;
}
const FrameForIcon = styled(Frame)<PropsForIcon>`
  padding: 5px;
  border-radius: 4px;
  font-size: ${(p) => {
    let size = 20;
    if (p.size) size *= p.size * 1.5;

    return `${size}px`;
  }};

  font-size: ${(p) => p.iconSize};
  svg {
    position: relative;
    left: 1px;
    bottom: 1px;
  }
`;

export function ButtonForIcon(props: PropsForIcon & Props) {
  return <FrameForIcon {...props}>{props.children}</FrameForIcon>;
}
