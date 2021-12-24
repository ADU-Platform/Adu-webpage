import styled from "styled-components";
import { Navbar } from "../square-ui/components/Navbar";

const Frame = styled.div``;
export default function User() {
  return (
    <Frame>
      <Navbar userName={null}></Navbar>
    </Frame>
  );
}
