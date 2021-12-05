import React, { ReactNode, useEffect } from "react";
import styled from "styled-components";

//redux
import { useDispatch } from "react-redux";
import { replaceTool, ToolKind } from "../../../redux/toolPickerSlice";
import { BsFiles, BsBoxSeam } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";

enum Mode {
  Light,
  Dark,
}

const Frame = styled.li.attrs((props: { mode: Mode }) => ({
  mode: props.mode,
}))`
  width: 50px;
  height: 50px;

  border-radius: 6px;

  font-size: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  svg {
    position: relative;
    right: 1px;
  }

  background-color: ${(p) =>
    p.mode === Mode.Light ? p.theme.bg.default : p.theme.fg.dimmer};
  color: ${(p) =>
    p.mode === Mode.Light ? p.theme.fg.dimmest : p.theme.bg.root};

  transition: all 0.2s ease;
`;

interface IProps {
  isSelected: boolean;
  kind: ToolKind;
}

function SideBtn({ isSelected, kind }: IProps) {
  const dispatch = useDispatch();
  useEffect(() => {}, []);

  return (
    <Frame
      mode={isSelected ? Mode.Dark : Mode.Light}
      onClick={() => dispatch(replaceTool(kind))}
    >
      {kind === ToolKind.Files ? <BsFiles /> : null}
      {kind === ToolKind.Packages ? <BsBoxSeam /> : null}
      {kind === ToolKind.Setting ? <AiOutlineSetting /> : null}
    </Frame>
  );
}

export default SideBtn;
