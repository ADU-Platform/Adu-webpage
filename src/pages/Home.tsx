import { useEffect } from "react";
import styled from "styled-components";

import { Navbar } from "../square-ui/components/Navbar";

const Frame = styled.div``;

function Home() {
  return (
    <Frame>
      <Navbar userName={null}></Navbar>
    </Frame>
  );
}

export default Home;
