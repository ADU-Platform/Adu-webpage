import styled from "styled-components";
import SideNav from "../molecules/SideNav";
import SidePane from "../molecules/SidePane";

const Frame = styled.div`
  height: 100%;

  display: flex;
  flex-direction: row;
`;

function Left() {
  return (
    <Frame>
      <SideNav />
      <SidePane />
    </Frame>
  );
}

export default Left;
