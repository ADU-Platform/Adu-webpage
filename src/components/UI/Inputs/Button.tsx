import { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";

interface IAttrs {
  size: string;
  fontSize: string;
}
const Frame = styled.div.attrs((a: IAttrs) => a)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  padding: 10px;

  border-radius: 10px;
  //border: 1px solid ${(p) => p.theme.bg.root};

  svg {
    font-size: ${(p) => p.fontSize};
  }

  transition: all 0.1s ease;

  &:hover {
    background-color: ${(p) => p.theme.bg.root};
  }
`;

interface IProps {
  children?: ReactElement | ReactElement[];
  size: number;
}

function Button(props: IProps) {
  return (
    <Frame size={`${props.size + 10}px`} fontSize={`${props.size}px`}>
      {props.children}
    </Frame>
  );
}

export default Button;
