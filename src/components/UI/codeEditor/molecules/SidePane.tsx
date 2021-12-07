import styled from "styled-components";

//redux
import { useDispatch, useSelector } from "react-redux";

const Frame = styled.div`
  width: 300px;
  height: 100%;

  background-color: ${(p) => p.theme.bg.default};
`;

const Header = styled.div`
  width: 100%;
  padding: 20 px;

  display: flex;
  flex-direction: row;
`;

function SidePane() {
  return <Frame></Frame>;
}

export default SidePane;
