import styled from "styled-components";

//square-ui
import { CardForLink } from "../../../square-ui/components/Card";
import { NavbarForWorkspace } from "../../../square-ui/components/Navbar";
import { Text } from "../../../square-ui/components/Text";
import { Size } from "../../../square-ui/types/Size";

//design stuff
import { AiOutlineArrowRight } from "react-icons/ai";

const Frame = styled.div``;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 20px;
    svg {
      font-size: 30px;
    }
  }
`;

//physicalcomputing Home
function Home() {
  return (
    <Frame>
      <NavbarForWorkspace userName={null} />
      <Section>
        <Text size={Size.md}>Start Step</Text>
        <div>
          <CardForLink to="" size="200px 300px">
            <Text>Install OS</Text>
          </CardForLink>
          <AiOutlineArrowRight />
          <CardForLink
            to="/workspace/physicalcomputing/register"
            size="200px 300px"
          >
            <Text>Register a device</Text>
          </CardForLink>
          <AiOutlineArrowRight />
          <CardForLink to="" size="200px 300px">
            <Text>Program in editor</Text>
          </CardForLink>
        </div>
      </Section>
      <Section>
        <Text size={Size.md}>Support</Text>
        <div>
          <CardForLink to="" size="200px 300px">
            <Text>Explore documentation</Text>
          </CardForLink>
          <CardForLink to="" size="200px 300px">
            <Text>See how works</Text>
          </CardForLink>
          <CardForLink to="" size="200px 300px">
            <Text>Questions</Text>
          </CardForLink>
        </div>
      </Section>
      <Section>
        <Text size={Size.md}>All features</Text>
        <div>
          <CardForLink to="" size="200px 300px">
            <Text>Communicate with other device</Text>
          </CardForLink>
          <CardForLink to="" size="200px 300px">
            <Text>Editor Extentions</Text>
          </CardForLink>
        </div>
      </Section>
    </Frame>
  );
}

export default Home;
