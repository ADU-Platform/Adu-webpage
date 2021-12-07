import styled from "styled-components";

const Frame = styled.div`
  width: calc(100% - 44px);
`;

const Text = styled.h1`
  width: 100%;
  font-size: 15px;
  text-align: start;
  padding: 5px;
`;

function UserName() {
  const loggedIn = null;
  return (
    <Frame>
      <Text>
        {loggedIn ? "welcomehyunseo@gmail.c..." : "You need to log in..."}
      </Text>
    </Frame>
  );
}

export default UserName;
