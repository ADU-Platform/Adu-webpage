import styled from "styled-components";
import SignInBox from "../UI/account/organisms/SIgnInBox";

const Frame = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ffffff;
`;

function SignIn() {
  return (
    <Frame>
      <SignInBox />
    </Frame>
  );
}

export default SignIn;
