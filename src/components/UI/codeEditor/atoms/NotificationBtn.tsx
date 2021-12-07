import { useEffect, useState } from "react";
import { VscBell } from "react-icons/vsc";
import styled from "styled-components";

const Frame = styled.div`
  width: 44px;

  font-size: 24px;
`;

function NotificationBtn() {
  return (
    <Frame>
      <VscBell />
    </Frame>
  );
}

export default NotificationBtn;
