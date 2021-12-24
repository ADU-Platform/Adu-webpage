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
  height: 80vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

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
  const {
    email,
    password,
    handleEmailInput,
    handlePasswordInput,
    handleSubmit,
    message,
  } = useSignIn();

  return (
    <Frame>
      <Card className="card-main" size="350px">
        <Text size={Size.md}>Sign in to adu</Text>
        <Text>{message}</Text>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <Text>Email</Text>
            <input type="text" value={email} onChange={handleEmailInput} />
          </div>
          <div className="field">
            <Text>Password</Text>
            <input
              type="password"
              value={password}
              onChange={handlePasswordInput}
            />
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
