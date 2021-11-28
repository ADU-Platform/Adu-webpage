import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Header = styled.div`
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`;

function Home() {
  return (
    <HomeContainer>
      <Header>
        <Navbar></Navbar>
      </Header>
    </HomeContainer>
  );
}

export default Home;
