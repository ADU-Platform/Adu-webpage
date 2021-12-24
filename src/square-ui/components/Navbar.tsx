import styled from "styled-components";
import { BackgroundColor } from "../types/Colors";
import { Brand } from "./Brand";
import { Button, ButtonForIcon, ButtonForLink } from "./Button";
import { Input, InputForSearch } from "./Input";
import { Text, TextForLink } from "./Text";
import { Size } from "../types/Size";

import { VscAccount } from "react-icons/vsc";
import { useEffect } from "react";

interface Props {
  userName?: string | null;
}
interface Account {
  login?: boolean;
}

const Frame = styled.nav`
  width: 100vw;
  height: 80px;

  background-color: ${BackgroundColor.Default};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  padding: 0 20vw;
  .center {
    width: 40vw;
    display: flex;
  }
  .search-bar {
    justify-content: center;
  }
  .navigation {
    justify-content: flex-start;
    position: relative;
    top: 3px;
    gap: 15px;
  }
  .side {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .account {
    justify-content: flex-end;
  }
`;
const Account = (props: Props & Account) => (
  <div className="side account">
    <TextForLink hidden={!props.login} to="/user">
      {props.userName}
    </TextForLink>
    <ButtonForLink outline hidden={props.login} to="/signin">
      Sign In
    </ButtonForLink>
    <ButtonForLink dark outline hidden={props.login} to="/signup">
      Sign Up
    </ButtonForLink>
  </div>
);

export function Navbar(props: Props) {
  return (
    <Frame>
      <div className="side">
        <Brand to="/">Adu</Brand>
      </div>
      <div className="center navigation">
        <TextForLink to="/workspace">Workspace</TextForLink>
        <TextForLink to="">Marketplace</TextForLink>
        <TextForLink to="">Learn</TextForLink>
        <TextForLink to="">Documentation</TextForLink>
        <TextForLink to="">Explorer</TextForLink>
        <TextForLink to="">Support</TextForLink>
        <TextForLink to="">Contact us</TextForLink>
      </div>
      <Account {...props} login={props.userName !== undefined} />
    </Frame>
  );
}

const FrameForWorkspace = styled(Frame)``;
export function NavbarForWorkspace(props: Props) {
  return (
    <FrameForWorkspace>
      <Brand to="/workspace">Adu workspace</Brand>

      <div className="center search-bar">
        <InputForSearch placeholder="search for application, tutorials, docs, and more" />
        <Button outline dark>
          search
        </Button>
      </div>
      <Account {...props} login={props.userName !== undefined} />
    </FrameForWorkspace>
  );
}
