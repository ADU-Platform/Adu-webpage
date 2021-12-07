import styled from "styled-components";

const Frame = styled.div`
  width: inherit;
  height: inherit;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: calc(100% - 1px);
  height: calc(100% - 1px);
  background-image: linear-gradient(
    to right,
    ${(p) => p.theme.bg.default},
    ${(p) => p.theme.bg.default},
    ${(p) => p.theme.bg.tile},
    ${(p) => p.theme.bg.highest},
    ${(p) => p.theme.bg.tile},
    ${(p) => p.theme.bg.default},
    ${(p) => p.theme.bg.default}
  );
  background-size: 500%;

  border: 1px solid ${(p) => p.theme.bg.tile};
  //border-radius: 10px;

  animation: bg-animation 2s infinite reverse;

  @keyframes bg-animation {
    0% {
      background-position: left;
    }
    100% {
      background-position: right;
    }
  }
`;

function CalmVerticalBox() {
  return (
    <Frame>
      <Box></Box>
    </Frame>
  );
}

export default CalmVerticalBox;
