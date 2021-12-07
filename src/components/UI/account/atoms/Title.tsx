import styled from "styled-components";

const Frame = styled.div`
  color: ${(p) => p.theme.fg.dimmer};
  font-size: 23px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 10px;
`;

const Text = styled.h1`
  user-select: none;
`;

function Title() {
  return (
    <Frame>
      <Text>Sign in Aduhyunna</Text>
    </Frame>
  );
}

export default Title;
