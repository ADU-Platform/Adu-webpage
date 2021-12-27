import styled from "styled-components";
import { useSignOut } from "../../back";

const Frame = styled.div``;
export default function SignOut() {
  const signOut = useSignOut();
  return <Frame>sign out</Frame>;
}
