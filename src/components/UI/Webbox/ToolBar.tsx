import styled from "styled-components";

import { MdPlayCircleOutline } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import ButtonForIcon from "../Inputs/ButtonForIcon";
import IconButton from "../Inputs/IconButton";

const Frame = styled.div`
  width: 100%;
  height: 66px;

  background-color: ${(p) => p.theme.bg.default};
  border: 1px solid ${(p) => p.theme.outline.dimmer};
  border-radius: 4px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;

  padding: 7px;

  //cursor: pointer;

  box-shadow: 2px 2px ${(p) => p.theme.outline.dimmest};
`;

function ToolBar() {
  return (
    <Frame>
      <IconButton size={30}>
        <MdPlayCircleOutline />
      </IconButton>
      <IconButton size={30}>
        <VscSettings />
      </IconButton>
    </Frame>
  );
}

export default ToolBar;
