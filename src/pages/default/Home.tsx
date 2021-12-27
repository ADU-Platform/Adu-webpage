import styled from "styled-components";
import { useUser } from "../../back";
import Header from "../../ui/components/structure/Header";
import Navigation from "../../ui/components/structure/Navigation";

const Frame = styled.div``;
export default function Home() {
  const user = useUser();
  return (
    <Frame>
      <Header user={user} />
      <Navigation />
    </Frame>
  );
}
