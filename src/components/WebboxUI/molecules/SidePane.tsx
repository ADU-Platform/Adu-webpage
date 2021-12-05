import styled from "styled-components";

//redux
import { useDispatch, useSelector } from "react-redux";

const Frame = styled.div`
  min-width: 200px;
  width: 15vw;
  max-width: 300px;
  height: 100%;

  background-color: ${(p) => p.theme.bg.default};

  margin-left: 2px;

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const Header = styled.div`
  width: 100%;
  padding: 20 px;

  display: flex;
  flex-direction: row;
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;
const Left = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row-reverse;
`;

function SidePane() {
  return (
    <Frame>
      <Header>
        <Title>Files</Title>
        <Left></Left>
      </Header>
    </Frame>
  );
}

export default SidePane;
