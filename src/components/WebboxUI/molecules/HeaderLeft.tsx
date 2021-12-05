import styled from "styled-components";
import Logo from "../atoms/Logo";
import MenuBtn from "../atoms/MenuBtn";
import PageTitle from "../atoms/PageTitle";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 13px;
  margin-left: 13px;
`;

function WebboxHeaderLeft() {
  return (
    <Container>
      <MenuBtn size="lg" />
      <Logo />
      <PageTitle />
    </Container>
  );
}

export default WebboxHeaderLeft;
