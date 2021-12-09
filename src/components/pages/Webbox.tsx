//styled-components
import styled from "styled-components";
import CodeEditor from "../templates/CodeEditor";
import Navbar from "../templates/Navbar";

const Frame = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: ${(p) => p.theme.bg.root};
`;

function Webbox() {
  
  return (
    <Frame>
      <Navbar title="WEBBOX"></Navbar>
      <CodeEditor />
    </Frame>
  );
}

export default Webbox;
