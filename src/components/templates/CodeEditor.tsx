import styled from "styled-components";
import DeviceState from "../UI/Webbox/DeviceState";
import Editor from "../UI/Webbox/Editor";
import Sketches from "../UI/Webbox/Sketches";
import ToolBar from "../UI/Webbox/ToolBar";

const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;

  padding: 10px;
`;

const ExtensionsField = styled.div`
  width: 250px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Center = styled.div`
  width: 50vw;
  
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function CodeEditor() {
  return (
    <Frame>
      <ExtensionsField>
        <DeviceState isConnected={false} />
        <Sketches isConnected={false} />
      </ExtensionsField>
      <Center>
        <ToolBar />
        <Editor />
      </Center>
    </Frame>
  );
}

export default CodeEditor;
