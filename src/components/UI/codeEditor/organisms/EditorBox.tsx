import styled from "styled-components";

const Frame = styled.div`
  width: calc(100% - 350px);
`;

const Box = styled.div`
  width: calc(100% - 50px);
  height: calc(100% - 50px);

  margin: 25px;

  background-color: ${(p) => p.theme.bg.default};
  border: 1px solid ${(p) => p.theme.outline.dimmer};

  border-radius: 4px;
`;

function Body() {
  return (
    <Frame>
      <Box></Box>
    </Frame>
  );
}

export default Body;
