import { useState } from "react";
import { VscChevronDown } from "react-icons/vsc";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ButtonForIcon } from "../../square-ui/components/Button";
import { Card } from "../../square-ui/components/Card";
import { Divider } from "../../square-ui/components/Divider";
import { NavbarForWorkspace } from "../../square-ui/components/Navbar";
import { Text } from "../../square-ui/components/Text";

interface Props {}
const Frame = styled.div`
  .contents {
    height: 50vh;

    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    padding: 20px 20vw;
  }
  .side-board {
    width: 300px;

    .card {
      justify-content: flex-start;
    }
    .header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .organizations-drop {
      width: 100%;
    }
  }
  .app-field {
    width: 100%;
  }
`;
export default function Projects() {
  const [organizationsDrob, setOrganizationsDrob] = useState(false);
  let { projectUuid } = useParams();

  return (
    <Frame>
      <NavbarForWorkspace userName={null} />
      <div className="contents">
        <div className="side-board">
          <Card size="100% 100%">
            <div className="header">
              <Text>{null}</Text>
              <ButtonForIcon onClick={() => setOrganizationsDrob((p) => !p)}>
                <VscChevronDown />
              </ButtonForIcon>
            </div>
            <div className="organizations-drop" hidden={!organizationsDrob}>
              <Divider />
            </div>
          </Card>
        </div>
        <div className="app-field">
          <Card size="100% 100%"></Card>
        </div>
      </div>
    </Frame>
  );
}
