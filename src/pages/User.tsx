import styled from "styled-components";
import { useUser } from "../react-back";
import { Navbar } from "../square-ui/components/Navbar";

const Frame = styled.div``;
export default function User() {
  const user = useUser();

  return (
    <Frame>
      <Navbar userName={user?.email}></Navbar>
    </Frame>
  );
}
