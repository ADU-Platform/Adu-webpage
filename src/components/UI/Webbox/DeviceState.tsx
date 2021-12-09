import styled from "styled-components";

import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const Frame = styled.div`
  width: 100%;
  height: 42px;

  background-color: ${(p) => p.theme.bg.default};
  border: 1px solid ${(p) => p.theme.outline.dimmer};
  border-radius: 4px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;

  padding: 7px;
  cursor: pointer;
  
  h1 {
    font-size: 18px;
    color: ${(p) => p.theme.fg.dimmer};
  }
`;

const Check = styled(AiOutlineCheck)`
  font-size: 20px;
  color: rgb(120, 224, 143);
`;

const Close = styled(AiOutlineClose)`
  font-size: 20px;
  color: rgb(229, 80, 57);
`;

interface IProps {
  isConnected: boolean;
  deviceName?: string;
}

function DeviceState(props: IProps) {
  return (
    <Frame>
      {props.isConnected ? <Check /> : <Close />}
      <h1>{props.deviceName || "No connection"}</h1>
    </Frame>
  );
}

export default DeviceState;
