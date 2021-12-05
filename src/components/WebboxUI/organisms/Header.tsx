import HeaderLeft from "../molecules/HeaderLeft";
import HeaderRight from "../molecules/HeaderRight";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 57px;

  background-color: ${(p) => p.theme.bg.default};
  border-bottom-color: ${(p) => p.theme.bg.highest};
`;
function Navbar() {
  return (
    <Container>
      <HeaderLeft />
      <HeaderRight />
    </Container>
  );
}

export default Navbar;
