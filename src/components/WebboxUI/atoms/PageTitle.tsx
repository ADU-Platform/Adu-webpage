import styled from "styled-components";

const Container = styled.div`
  color: ${(p) => p.theme.bg.tile};
  background-color: ${(p) => p.theme.fg.dimmer};

  text-align: center;

  width: 171px;
  height: 38px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  font-size: 31px;
  letter-spacing: 3px;
`;

function PageTitle() {
  return (
    <Container>
      <Title>WEBBOX</Title>
    </Container>
  );
}

export default PageTitle;
