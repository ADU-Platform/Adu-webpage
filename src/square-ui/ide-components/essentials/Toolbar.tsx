import { VscPlay, VscSave, VscSettings } from "react-icons/vsc";
import styled from "styled-components";
import { ButtonForIcon } from "../../components/Button";
import { Card } from "../../components/Card";
import { Size } from "../../types/Size";

interface Props {}
const Frame = styled.div`
  width: 100%;
  .card {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export default function Toolbar() {
  return (
    <Frame>
      <Card size="100% inherit">
        <div className="left">
          <ButtonForIcon>
            <VscPlay />
          </ButtonForIcon>
        </div>
        <div className="right">
          <ButtonForIcon>
            <VscSave />
          </ButtonForIcon>
          <ButtonForIcon>
            <VscSettings />
          </ButtonForIcon>
        </div>
      </Card>
    </Frame>
  );
}
