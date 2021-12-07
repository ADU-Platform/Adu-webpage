import styled from "styled-components";
import { VscAccount } from "react-icons/vsc";

const Frame = styled.div`
  width: 44px;

  font-size: 32px;
`;

function UserImg() {
  const loggedIn = null;
  return <Frame>{loggedIn ? null : <VscAccount />}</Frame>;
}

export default UserImg;
