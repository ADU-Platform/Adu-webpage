import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BackgroundColor, BorderColor } from "../types/Colors";

interface Props {
  size: string;
  minWidth?: string;
  outline?: boolean;
  noShadow?: boolean;
  className?: string;

  children?: any;
}
const Frame = styled.div<Props>`
  min-width: ${(p) => p.minWidth};
  width: ${(p) => p.size.split(" ")[0]};
  height: ${(p) => p.size.split(" ")[1]};

  box-shadow: ${(p) => (p.noShadow ? null : "0px 3px 6px rgba(0, 0, 0, 0.16)")};

  background-color: ${BackgroundColor.Default};

  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  border-color: ${(p) => (p.outline ? BorderColor.Default : null)};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 10px;

  margin-top: 20px;
`;
export function Card(props: Props) {
  return (
    <Frame className="card" {...props}>
      {props.children}
    </Frame>
  );
}

interface PropsForLink {
  to: string;
}
const FrameForLink = styled(Frame)<PropsForLink>``;
export function CardForLink(props: Props & PropsForLink) {
  return (
    <FrameForLink className="card-for-link" as={Link} {...props}>
      {props.children}
    </FrameForLink>
  );
}
