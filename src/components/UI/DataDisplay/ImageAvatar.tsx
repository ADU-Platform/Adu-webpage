import { VscAccount } from "react-icons/vsc";
import styled from "styled-components";

const Frame = styled.div`
  font-size: 32px;

  color: ${(p) => p.theme.fg.dimmer};
`;

function ImageAvatar() {
  return (
    <Frame>
      <VscAccount />
    </Frame>
  );
}

export default ImageAvatar;
