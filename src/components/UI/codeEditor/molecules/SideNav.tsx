//styled-components
import styled from "styled-components";

//Context API
import { useWebboxContext } from "../../../pages/Webbox";
import CalmVerticalBox from "../../animation/atoms/CalmVerticalBox";

//components of atoms
import SideBtn from "../atoms/SideBtn";

const Frame = styled.div`
  width: 50px;
  height: 100%;

  border: 1px solid ${(p) => p.theme.outline.dimmer};
  background-color: ${(p) => p.theme.bg.default};
`;
const List = styled.ul`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

function SideNav() {
  const useWebbox = useWebboxContext();
  return (
    <Frame>
      <List>
        {useWebbox.sideToolList ? (
          useWebbox.sideToolList.map((i) => (
            <SideBtn
              isSelected={i.isSelected}
              kind={i.kind}
              key={i.kind}
              clickFn={useWebbox.replaceTool}
            />
          ))
        ) : (
          <CalmVerticalBox />
        )}
      </List>
    </Frame>
  );
}

export default SideNav;
