import styled from "styled-components";
import AppsBtn from "../atoms/AppsBtn";
import NotificationBtn from "../atoms/NotificationBtn";
import UserImg from "../atoms/UserImg";
import UserName from "../atoms/UserName";

const Frame = styled.div`
  width: 350px;
  height: 65px;

  background-color: ${(p) => p.theme.bg.default};
  border: 1px solid ${(p) => p.theme.outline.dimmer};

  display: flex;
  justify-content: space-between;
  div {
    div {
      height: 65px;

      color: ${(p) => p.theme.fg.dimmer};

      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;
    }
  }
`;

const Left = styled.div`
  width: 50px;
`;
const UserProfile = styled.div`
  width: calc(100% - 94px);
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Right = styled.div`
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Header() {
  return (
    <Frame>
      <Left>
        <AppsBtn />
      </Left>
      <UserProfile>
        <UserImg />
        <UserName />
      </UserProfile>
      <Right>
        <NotificationBtn />
      </Right>
    </Frame>
  );
}

export default Header;
