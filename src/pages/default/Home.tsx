import styled from "styled-components";
import Header from "../../ui/components/structure/Header";
import Navigation from "../../ui/components/structure/Navigation";

const Frame = styled.div``;
export default function Home() {
  return (
    <Frame>
      <Header />
      <Navigation />
    </Frame>
  );
}
