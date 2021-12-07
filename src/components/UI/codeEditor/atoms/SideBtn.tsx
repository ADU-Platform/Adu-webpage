import React, { ReactNode, useEffect } from "react";
import styled from "styled-components";
import { VscFiles, VscSymbolMethod, VscSettingsGear } from "react-icons/vsc";

// type
import { ToolKind } from "../../../../redux/toolPickerSlice";
import CalmVerticalBox from "../../animation/atoms/CalmVerticalBox";

enum Mode {
  Light,
  Dark,
}

const Frame = styled.li`
  margin-top: 5px;

  width: 40px;
  height: 40px;
`;

const Box = styled.div.attrs((props: { mode: Mode }) => ({
  mode: props.mode,
}))`
  width: inherit;
  height: inherit;
  border-radius: 6px;

  font-size: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: all 0.2s ease;

  background-color: ${(p) =>
    p.mode === Mode.Light ? p.theme.bg.default : p.theme.fg.dimmer};
  color: ${(p) =>
    p.mode === Mode.Light ? p.theme.fg.dimmest : p.theme.bg.root};
`;

interface IProps {
  isSelected: boolean;
  kind: ToolKind;
  clickFn?: Function;
}

function SideBtn({ isSelected, kind, clickFn }: IProps) {
  return (
    <Frame>
      {clickFn ? (
        <Box
          mode={isSelected ? Mode.Dark : Mode.Light}
          onClick={() => (clickFn ? clickFn(kind) : null)}
        >
          {kind === ToolKind.Files ? <VscFiles /> : null}
          {kind === ToolKind.Packages ? <VscSymbolMethod /> : null}
          {kind === ToolKind.Setting ? <VscSettingsGear /> : null}
        </Box>
      ) : (
        <CalmVerticalBox />
      )}
    </Frame>
  );
}

export default SideBtn;
