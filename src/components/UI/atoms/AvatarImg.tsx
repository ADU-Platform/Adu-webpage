import styled from "styled-components";

const Container = styled.div`
  height: 32px;
  width: 32px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;

  cursor: pointer;
`;

function AvatarImg() {
  return <Container></Container>;
}

export default AvatarImg;
