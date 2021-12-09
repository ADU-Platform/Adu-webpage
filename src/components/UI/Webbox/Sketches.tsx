import styled from "styled-components";
import { BiUnlink } from "react-icons/bi";
import { VscNewFile } from "react-icons/vsc";
import ButtonForIcon from "../Inputs/ButtonForIcon";
import IconButton from "../Inputs/IconButton";

const Frame = styled.div`
  width: 100%;
  height: 300px;

  background-color: ${(p) => p.theme.bg.default};
  border: 1px solid ${(p) => p.theme.outline.dimmer};
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;

  padding: 15px;
  //cursor: pointer;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h1`
  font-size: 21px;
`;

const NotConnection = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${(p) => p.theme.fg.dimmer};
  font-size: 50px;
`;

interface IProps {
  isConnected: boolean;
}

function Sketches(props: IProps) {
  return (
    <Frame>
      <Header>
        <Title>Sketches</Title>
        <IconButton size={20}>
          <VscNewFile />
        </IconButton>
      </Header>
      {props.isConnected ? null : (
        <NotConnection>
          <BiUnlink />
        </NotConnection>
      )}
    </Frame>
  );
}

export default Sketches;
