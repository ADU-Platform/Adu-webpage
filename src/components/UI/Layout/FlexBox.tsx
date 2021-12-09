import React, { ReactElement } from "react";
import styled from "styled-components";

const Frame = styled.div`
  background-color: ${(p) => p.theme.bg.default};
  border-bottom-color: ${(p) => p.theme.outline.default};
  border-bottom-style: solid;

  display: flex;
`;

interface IProps {
  children?: ReactElement | ReactElement[];
  width?: string;
  height?: string;
  borderBottomWidth?: string;
  flexDirection?: "column" | "row" | "column-reverse" | "row-reverse";
  justiftContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "start"
    | "end"
    | "left"
    | "unsafe";
  alignItems?:
    | "stretch"
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "start"
    | "end"
    | "self-start"
    | "unsafe";
}

function FlexBox(props: IProps) {
  return (
    <Frame
      style={{
        width: props.width,
        height: props.height,
        borderBottomWidth: props.borderBottomWidth || "0px",
        flexDirection: props.flexDirection || "row",
        justifyContent: props.justiftContent,
        alignItems: props.alignItems,
      }}
    >
      {props.children}
    </Frame>
  );
}

export default FlexBox;
