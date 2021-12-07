import styled from "styled-components";
import SideHeader from "../molecules/SideHeader";
import SideNav from "../molecules/SideNav";
import SidePane from "../molecules/SidePane";

const Frame = styled.div`
  width: 350px;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;

  height: 100%;
`;

function Left() {
  return (
    <Frame>
      <SideHeader />
      <Bottom>
        <SideNav />
        <SidePane />
      </Bottom>
    </Frame>
  );
}

export default Left;
