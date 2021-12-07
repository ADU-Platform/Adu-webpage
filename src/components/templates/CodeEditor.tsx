import React, { useContext } from "react";
import styled from "styled-components";
import EditorBox from "../UI/codeEditor/organisms/EditorBox";
import Side from "../UI/codeEditor/organisms/Side";

//styling
const Frame = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: ${(p) => p.theme.bg.root};

  display: flex;
  flex-direction: row;
`;

function CodeEditor() {
  return (
    <Frame>
      <Side />
      <EditorBox />
    </Frame>
  );
}

export default CodeEditor;
