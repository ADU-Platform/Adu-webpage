import styled from "styled-components";

const Container = styled.div`
  color: ${(p) => p.theme.bg.tile};
  background-color: ${(p) => p.theme.fg.dimmer};
  padding: 5px 14px;

  text-align: center;
`;

const Title = styled.span`
  
  font-size: 31px;

  text-align: center;
`;

function PageTitle() {
  return (
    <Container>
      <Title>W E B B O X</Title>
    </Container>
  );
}

export default PageTitle;
