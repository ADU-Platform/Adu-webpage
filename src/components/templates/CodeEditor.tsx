import styled from "styled-components";
import Center from "../WebboxUI/organisms/Center";
import Left from "../WebboxUI/organisms/Left";
import Right from "../WebboxUI/organisms/Right";

import Header from "../WebboxUI/organisms/Header";

const Frame = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Body = styled.div`
  width: 100vw;
  height: calc(100% - 57px);

  background-color: ${(p) => p.theme.bg.root};

  padding: 20px;
`;

function CodeEditor() {
  return (
    <Frame>
      <Header />
      <Body>
        <Left />
        <Center />
        <Right />
      </Body>
    </Frame>
  );
}

export default CodeEditor;
