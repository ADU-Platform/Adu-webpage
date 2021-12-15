import styled from "styled-components";
import FlexBox from "../UI/Layout/FlexBox";

//ui
import { IoAppsSharp } from "react-icons/io5";
import { VscAzure, VscBell, VscAccount } from "react-icons/vsc";
import ButtonForIcon from "../UI/Inputs/ButtonForIcon";

//react router dom
import { Link } from "react-router-dom";

//redux
import { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import ImageAvatar from "../UI/DataDisplay/ImageAvatar";
import IconButton from "../UI/Inputs/IconButton";
import Button from "../UI/Inputs/Button";
import { useState } from "react";

const Frame = styled.div`
  width: 100vw;

  background-color: ${(p) => p.theme.bg.default};
  border-bottom: 1px solid ${(p) => p.theme.outline.default};

  display: flex;
  justify-content: space-between;

  user-select: none;
`;
const Left = styled.div`
  width: 260px;
  height: 65px;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 20px;
`;
const Logo = styled(Link)`
  height: 44px;

  font-size: 40px;
`;
const PageTitle = styled(Link)`
  width: 157px;
  height: 44px;
  background-color: ${(p) => p.theme.fg.dimmer};

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: ${(p) => p.theme.bg.default};
    font-size: 32px;
    font-weight: 700;
  }
`;
const Right = styled.div`
  margin-right: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IProps {
  title: string;
}
function Navbar(props: IProps) {
  const user = useSelector((state: RootState) => state.user);
  
  return (
    <Frame>
      <Left>
        <Logo to={"/"}>
          <VscAzure />
        </Logo>
        <PageTitle to={"/webbox"}>
          <h1>{props.title}</h1>
        </PageTitle>
      </Left>
      <Right>
        <IconButton size={25}>
          <IoAppsSharp />
        </IconButton>
        {user.loggedIn ? (
          <>
            <IconButton size={25}>
              <VscBell />
            </IconButton>
            <ImageAvatar />
          </>
        ) : (
          <Button size={25}>
            <>Sign in</>
          </Button>
        )}
      </Right>
    </Frame>
  );
}

export default Navbar;