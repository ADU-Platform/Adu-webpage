import { useState } from "react";
import styled from "styled-components";
import { Connection } from "../../../pages/workspace/physicalcomputing/IDE";
import { Card } from "../../components/Card";
import { Text } from "../../components/Text";

interface Props {
  connection?: Connection;
}
const Frame = styled.div`
  width: 100%;
  user-select: none;

  transition: all 0.3s ease-in-out;
  &:active {
    transform: scale(1.1);
  }
`;
export default function Connections(props: Props) {
  return (
    <Frame>
      <Card noShadow size="100% inherit">
        {props.connection ? null : <Text>No connection</Text>}
      </Card>
    </Frame>
  );
}
