import { Link } from "react-router-dom";
import { IoLogoChrome } from "react-icons/io";
import styled from "styled-components";
import { useState } from "react";

const NavbarContainer = styled.nav`
  height: 86px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
const LogoContainer = styled.div``;
const LogoIcon = styled(IoLogoChrome)``;
const LogoText = styled.span``;
const NavToggle = styled.button``;
const ToggleItemContainer = styled.i``;
const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;
`;
const NavItem = styled.li``;
const NavItemInner = styled.div``;
const NavLinkItemInner = styled(Link)``;
const NavItemText = styled.span``;
const NavItemDropdown = styled.div``;
const DropdownWrapper = styled.div``;
const DropdownInner = styled.div``;
const DropdownList = styled.ul``;
const DropdownItem = styled.li``;
const DropItemContainer = styled(Link)``;
const DropItemTitle = styled.p``;
const DropItemHelper = styled.p``;
//const DropdownExtraTab = styled.div``;
const NavSideList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SideLeft = styled.li``;
const LeftContainer = styled(Link)``;
const LeftText = styled.span``;
const SideRight = styled.li``;
const RightContainer = styled(Link)``;
const RightText = styled.span``;

interface INavItem {
  title: string;
  dropdownItems?: IDropdownItem[];
}

interface IDropdownItem {
  title: string;
  helper: string;
}

const navItems: INavItem[] = [
  {
    title: "About",
  },
  {
    title: "Shop",
  },
  {
    title: "Webbox",
  },
  {
    title: "Explore",
  },
  {
    title: "Tutorials",
  },
];

function Navbar() {
  const [showToggle, setShowToggle] = useState(false);
  return (
    <NavbarContainer>
      <LogoContainer>
        <LogoIcon></LogoIcon>
        <LogoText>Aduhyunna</LogoText>
      </LogoContainer>
      {showToggle ? (
        <NavToggle>
          <ToggleItemContainer></ToggleItemContainer>
        </NavToggle>
      ) : null}

      <NavList>
        {navItems.map((e) => (
          <NavItem key={e.title}>
            {e.dropdownItems ? (
              <NavItemInner>
                <NavItemText>{e.title}</NavItemText>
              </NavItemInner>
            ) : (
              <NavLinkItemInner to={"/"}>
                <NavItemText>{e.title}</NavItemText>
              </NavLinkItemInner>
            )}
            {e.dropdownItems ? (
              <NavItemDropdown>
                <DropdownWrapper>
                  <DropdownInner>
                    <DropdownList>
                      <DropdownItem>
                        <DropItemContainer to={"/"}>
                          <DropItemTitle></DropItemTitle>
                          <DropItemHelper></DropItemHelper>
                        </DropItemContainer>
                      </DropdownItem>
                    </DropdownList>
                  </DropdownInner>
                </DropdownWrapper>
              </NavItemDropdown>
            ) : null}
          </NavItem>
        ))}
      </NavList>

      <NavSideList>
        <SideLeft>
          <LeftContainer to={"/"}>
            <LeftText>Sing in</LeftText>
          </LeftContainer>
        </SideLeft>
        <SideRight>
          <RightContainer to={"/"}>
            <RightText>Contact us</RightText>
          </RightContainer>
        </SideRight>
      </NavSideList>
      
    </NavbarContainer>
  );
}

export default Navbar;
