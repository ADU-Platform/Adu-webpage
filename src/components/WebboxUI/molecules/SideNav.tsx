import { useEffect } from "react";
import styled from "styled-components";

//redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

//components of atoms
import SideBtn from "../atoms/SideBtn";

const Frame = styled.div`
  width: 65px;
  height: 100%;

  background-color: ${(p) => p.theme.bg.default};

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;
const List = styled.ul`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    margin-top: 9px;
  }
`;

function SideNav() {
  const sideItems = useSelector((state: RootState) => state.toolPicker.list);

  useEffect(() => {}, []);

  return (
    <Frame>
      <List>
        {sideItems.map((i) => (
          <SideBtn isSelected={i.isSelected} kind={i.kind} key={i.kind} />
        ))}
      </List>
    </Frame>
  );
}

export default SideNav;

//() => dispatch(selectSideItem(0))
