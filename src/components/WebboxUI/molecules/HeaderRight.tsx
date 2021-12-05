import styled from "styled-components";
import AvatarImg from "../atoms/AvatarImg";
import NotificationBtn from "../atoms/NotificationBtn";

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;

  gap: 13px;
  margin-right: 13px;
`;

function WebboxHeaderRight() {
  return (
    <Container>
      <AvatarImg />
      <NotificationBtn size="lg" />
    </Container>
  );
}

export default WebboxHeaderRight;
