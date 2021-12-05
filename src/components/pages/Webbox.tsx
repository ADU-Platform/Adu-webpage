import styled from "styled-components";
import CodeEditor from "../templates/CodeEditor";

const Frame = styled.div`
  width: 100vw;
  height: 100vh;
`;

function Webbox() {
  return (
    <Frame>
      <CodeEditor />
    </Frame>
  );
}

export default Webbox;
