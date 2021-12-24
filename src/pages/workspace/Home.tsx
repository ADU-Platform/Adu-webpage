//square-ui
import { ButtonForLink } from "../../square-ui/components/Button";
import { Card } from "../../square-ui/components/Card";
import { NavbarForWorkspace } from "../../square-ui/components/Navbar";
import { Text } from "../../square-ui/components/Text";
import { Size } from "../../square-ui/types/Size";

//design stuff
import styled from "styled-components";
import { AiOutlineRobot, AiOutlineDatabase } from "react-icons/ai";
import { BsJoystick } from "react-icons/bs";

const Frame = styled.div``;

const Section = styled.section`
  display: flex;
  justify-content: space-between;

  margin-top: 30px;
  padding: 0 20vw;

  svg {
    font-size: 45px;
    margin-bottom: 10px;
  }
  button {
    margin-top: 10px;
  }
`;

//workspace home
function Home() {
  return (
    <Frame>
      <NavbarForWorkspace userName={null} />
      <Section>
        {apps.map((a, i) => {
          return (
            <Card size="350px 230px" key={i}>
              {a.icon}
              <Text size={Size.sm}>{a.name}</Text>
              <Text>{a.description}</Text>
              <ButtonForLink dark to={a.to}>
                <Text dark>Get started</Text>
              </ButtonForLink>
            </Card>
          );
        })}
      </Section>
    </Frame>
  );
}

export default Home;

interface App {
  icon: React.ReactElement;
  name: string;
  description: string;
  to: string;
}
const apps: App[] = [
  {
    icon: <AiOutlineRobot />,
    name: "Physical Computing",
    description: "Can cloud coding using IoT devices.",
    to: "/workspace/physicalcomputing/home",
  },
  {
    icon: <AiOutlineDatabase />,
    name: "Hyper Connection",
    description: "Can cloud coding using IoT devices.",
    to: "/workspace/hyperconnection/home",
  },
  {
    icon: <BsJoystick />,
    name: "Cockpit",
    description: "Can cloud coding using IoT devices.",
    to: "/workspace/cockpit/home",
  },
];
