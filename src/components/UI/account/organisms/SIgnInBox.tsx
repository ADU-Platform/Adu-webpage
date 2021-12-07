import styled from "styled-components";
import Button from "../atoms/Button";
import Logo from "../atoms/Logo";
import Title from "../atoms/Title";
import IdInputFeild from "../molecules/IdInputFeild";
import PwInputFeild from "../molecules/PwInputFeild";

const Frame = styled.div`
  width: 338px;
  height: 400px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${(p) => p.theme.fg.dimmer};
  background-color: ${(p) => p.theme.bg.default};

  border-radius: 4px;

  position: relative;
  bottom: 50px;
`;

const Form = styled.div`
  width: 266px;
  height: 340px;

  div {
    width: 100%;
  }
`;

const Header = styled.div`
  height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Center = styled.div`
  height: 170px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const Bottom = styled.div`
  height: 70px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

function SignInBox() {
  return (
    <Frame>
      <Form>
        <Header>
          <Logo />
          <Title />
        </Header>
        <Center>
          <IdInputFeild />
          <PwInputFeild />
        </Center>
        <Bottom>
          <Button />
        </Bottom>
      </Form>
    </Frame>
  );
}

export default SignInBox;
