import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSignOut } from "../react-back";

const Frame = styled.div``;
export default function SignOut() {
  useSignOut();

  return <Frame></Frame>;
}
