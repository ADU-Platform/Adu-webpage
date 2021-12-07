import styled from "styled-components";

const Frame = styled.div`
  width: 266px;
  height: 32px;

  background-color: ${(p) => p.theme.fr.livid};

  border-radius: 4px;
  border-color: ${(p) => p.theme.fr.livid};

  font-size: 19px;
  color: ${(p) => p.theme.bg.default};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  user-select: none;

  &:active {
    opacity: 0.9;
  }
`;

const Text = styled.h1``;

function Button() {
  return (
    <Frame>
      <Text>Submit</Text>
    </Frame>
  );
}

export default Button;
