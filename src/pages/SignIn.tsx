import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSignIn } from "../react-back";
import { Button, ButtonForLink } from "../square-ui/components/Button";
import { Card } from "../square-ui/components/Card";
import { Input } from "../square-ui/components/Input";

//square-ui
import { Navbar } from "../square-ui/components/Navbar";
import { Text } from "../square-ui/components/Text";
import { Size } from "../square-ui/types/Size";

const Frame = styled.div`
  width: 100vw;
  height: 90vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .card-main {
    gap: 30px;
    padding: 40px 40px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    input,
    span {
      width: 100%;
    }
  }
`;
function SignIn() {
  const { registerSubmit, registerEmail, registerPassword, message } =
    useSignIn();

  return (
    <Frame>
      <Card className="card-main" size="350px">
        <Text size={Size.md}>Sign in to adu</Text>
        <Text>{message}</Text>
        <form {...registerSubmit}>
          <div className="field">
            <Text>Email</Text>
            <input {...registerEmail} />
          </div>
          <div className="field">
            <Text>Password</Text>
            <input {...registerPassword} />
          </div>
          <Button full dark>
            Sign In
          </Button>
        </form>
      </Card>
      <Card size="350px">
        <ButtonForLink textAlign="left" full disabled to="/">
          Forgot password?
        </ButtonForLink>
        <ButtonForLink textAlign="left" full disabled to="/">
          New to Adu?
        </ButtonForLink>
      </Card>
    </Frame>
  );
}

export default SignIn;
