import { ReactElement } from "react";
import styled from "styled-components";

const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const HoverBox = styled.div`
  transition: all 0.2s ease;

  &:hover {
    position: relative;
    //transform: scale(1.05);
    //background-color: ${(p) => p.theme.bg.root};
    bottom: 1px;
  }
`;

interface IProps {
  children?: ReactElement | ReactElement[];
  width?: string;
  height?: string;
  fontSize?: string;
}

function ButtonForIcon(props: IProps) {
  return (
    <Frame
      style={{
        width: props.width,
        height: props.height,
        fontSize: props.fontSize,
      }}
    >
      <HoverBox>{props.children}</HoverBox>
    </Frame>
  );
}

export default ButtonForIcon;
