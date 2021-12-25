//design stuff
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSignUp } from "../react-back";
import { Button } from "../square-ui/components/Button";
import { Card } from "../square-ui/components/Card";
import { Input } from "../square-ui/components/Input";
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

export default function SignUp() {
  const {
    registerSubmit,
    registerEmail,
    registerPassword,
    registerConfirmPassword,
    registerUsername,
    registerPhoneNumber,
    message,
  } = useSignUp();

  return (
    <Frame>
      <Card className="card-main" size="350px">
        <Text size={Size.md}>Welcome</Text>
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
          <div className="field">
            <Text>Confirm Password</Text>
            <input {...registerConfirmPassword} />
          </div>
          <div className="field">
            <Text>Username</Text>
            <input {...registerUsername} />
          </div>
          <div className="field">
            <Text>Phone Number</Text>
            <input {...registerPhoneNumber} />
          </div>
          <Button full dark>
            Sign Up
          </Button>
        </form>
      </Card>
    </Frame>
  );
}
