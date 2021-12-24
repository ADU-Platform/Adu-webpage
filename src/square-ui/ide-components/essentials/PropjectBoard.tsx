import { VscPlay, VscSave, VscSettings } from "react-icons/vsc";
import styled from "styled-components";
import { ButtonForIcon } from "../../components/Button";
import { Card } from "../../components/Card";
import { Text } from "../../components/Text";
import { Size } from "../../types/Size";

interface Props {
  active?: boolean;
  projectName?: string;
}
const Frame = styled.div`
  width: 100%;
`;
export default function PropjectBoard(props: Props) {
  return (
    <Frame>
      <Card size="100% inherit">
        <div className="active" hidden={!props.active}>
          <Text>{props.projectName}</Text>
        </div>
        <div className="noactive" hidden={props.active}>
          <Text>No project</Text>
        </div>
      </Card>
    </Frame>
  );
}
