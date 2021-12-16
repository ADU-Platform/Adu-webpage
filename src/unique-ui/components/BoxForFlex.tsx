import { CSSProperties, JSXElementConstructor } from "react";
import styled from "styled-components";
import { JsxChild } from "typescript";

//types
import { BackgroundColor, BorderColor } from "../types/Color";

interface IAttrs {
  shadowOpacity: number;
}
const Frame = styled.div.attrs((a: IAttrs) => a)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  background-color: ${BackgroundColor.Default};

  box-shadow: 0px 3px 6px rgb(0, 0, 0, ${(p) => p.shadowOpacity});

  border: 1px solid ${BackgroundColor.Default};
  border-left: 1px solid ${BackgroundColor.Default};
  border-right: 1px solid ${BackgroundColor.Default};
`;

interface IProps {
  width?: string;
  height?: string;
  backgroundColor?: BackgroundColor;
  borderRadius?: string; //Must be pixel.
  borderColor?: BorderColor;
  borderTopColor?: BorderColor;
  borderBottomColor?: BorderColor;
  borderLeftColor?: BorderColor;
  borderRightColor?: BorderColor;
  opacity?: number;
  shadowOpacity?: number;
  padding?: string;

  flexDirection?: "column" | "row";
  justifyContent?: string;
  alignItems?: string;
  gap?: string;

  children?: React.ReactElement | React.ReactElement[];
}
function BoxAsFlex(p: IProps) {
  return (
    <Frame style={{ ...p }} shadowOpacity={p.shadowOpacity || 0}>
      {p.children}
    </Frame>
  );
}

export default BoxAsFlex;
