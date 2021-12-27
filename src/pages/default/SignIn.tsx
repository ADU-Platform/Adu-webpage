import styled from "styled-components";
import { useSignIn } from "../../back";
import { VscAzure } from "react-icons/vsc";

//ui
import Heading from "../../ui/components/data display/Heading";
import { Loading } from "../../ui/components/feedback/Loading";
import Button from "../../ui/components/inputs/Button";
import Container from "../../ui/components/layout/Container";

//mui
import TextField from "@mui/material/TextField";
import Icon from "../../ui/components/data display/Icon";

export default function SignIn() {
  const { registerEmail, registerPassword, registerSubmit, message, loading } =
    useSignIn();
  return (
    <Frame>
      <Loading state={loading} />
      <Container>
        <Icon fontSize="42px" icon={<VscAzure />} />
        <Heading fontWeight={700} fontSize="32px" value="Welcome to adu" />

        <form {...registerSubmit}>
          <TextField size="small" {...registerEmail} />
          <TextField size="small" {...registerPassword} />

          <Button type="submit" full contained value="Sign In" />
        </form>
        <div hidden={message === undefined} className="warning-message">
          {message}
        </div>
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
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  .warning-message {
    color: red;
  }
`;
