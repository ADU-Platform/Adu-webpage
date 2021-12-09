import styled from "styled-components";

const Frame = styled.div`
  width: 100%;
  height: 50vh;

  background-color: ${(p) => p.theme.bg.default};
  border: 1px solid ${(p) => p.theme.outline.dimmer};
  border-radius: 4px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 13px;
  //cursor: pointer;
`;

function Editor() {
  return <Frame></Frame>;
}

export default Editor;
