import { VscAzure } from "react-icons/vsc";
import styled from "styled-components";

const Frame = styled.div`
  color: ${(p) => p.theme.fg.dimmer};
  font-size: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  user-select: none;
`;

function Logo() {
  return (
    <Frame>
      <VscAzure />
    </Frame>
  );
}

export default Logo;
