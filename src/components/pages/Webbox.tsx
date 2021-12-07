//react
import React from "react";

//styled-components
import styled from "styled-components";
import { VscFiles, VscSymbolMethod, VscSettingsGear } from "react-icons/vsc";

//UI
import ToggleBtn from "../UI/Inputs/ToggleBtn";
import ToggleBtnGroup from "../UI/Inputs/ToggleBtnGroup";

const Frame = styled.div`
  width: 100vw;
  height: 100vh;
`;

const SideNav = styled.div``;

function Webbox() {
  return (
    <Frame>
      <SideNav>
        <ToggleBtnGroup flexDirection="column" gap="10px">
          <ToggleBtn name="files" isSelected={true} size="40px">
            <VscFiles />
          </ToggleBtn>
          <ToggleBtn name="packages" isSelected={false} size="40px">
            <VscSymbolMethod />
          </ToggleBtn>
          <ToggleBtn name="setting" isSelected={false} size="40px">
            <VscSettingsGear />
          </ToggleBtn>
        </ToggleBtnGroup>
      </SideNav>
    </Frame>
  );
}

export default Webbox;
