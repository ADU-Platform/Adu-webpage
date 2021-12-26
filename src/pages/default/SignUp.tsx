import styled from "styled-components";

//back
import { useSignUp } from "../../back";

//ui
import Description from "../../ui/components/data display/Description";
import Heading from "../../ui/components/data display/Heading";
import { Loading } from "../../ui/components/feedback/Loading";
import Button from "../../ui/components/inputs/Button";
import Container from "../../ui/components/layout/Container";

//mui
import TextField from "@mui/material/TextField";

export default function SignUp() {
  const {
    registerSubmit,
    registerEmail,
    registerPassword,
    registerConfirmPassword,
    registerUsername,
    registerPhoneNumber,
    message,
    loading,
  } = useSignUp();

  return (
    <Frame>
      <Loading state={loading} />
      <Container>
        <Heading fontWeight={700} fontSize="32px" value="Sign Up" />

        <form {...registerSubmit}>
          <TextField size="small" {...registerEmail} />
          <TextField size="small" {...registerPassword} />
          <TextField size="small" {...registerConfirmPassword} />
          <TextField  size="small" {...registerUsername} />
          <TextField size="small" {...registerPhoneNumber} />

          <Button type="submit" full contained value="Sign Up" />
        </form>
        <div hidden={message === undefined} className="warning-message">
          {message}
        </div>
      </Container>
      <Container className="sub">
        <Description fontSize="14px" value="Already have an account?" />
        <Button text value="Sign In" href="/signin" />
      </Container>
    </Frame>
  );
}

const Frame = styled.div`
  height: 90vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .sub {
    flex-direction: row;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .field {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 5px;
  }

  .warning-message {
    color: red;
  }
`;
