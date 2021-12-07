import styled from "styled-components";

const Frame = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ffffff;
`;

function SignIn() {
  return <Frame></Frame>;
}

export default SignIn;
