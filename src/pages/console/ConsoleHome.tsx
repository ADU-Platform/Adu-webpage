import styled from "styled-components";

//icons
import { IoAppsSharp } from "react-icons/io5";
import { BiCodeBlock } from "react-icons/bi";
import { AiOutlineDatabase, AiOutlineRobot } from "react-icons/ai";
import { BsCpu } from "react-icons/bs";
import { VscGraph, VscSearch } from "react-icons/vsc";

//unique-ui
import NavbarForConsole from "../../unique-ui/constructures/NavbarForConsole";
import { Box, BoxForIcon, BoxForLink } from "../../unique-ui/components/Box";
import Navigation from "../../unique-ui/constructures/Navigation";
import InputForSearch from "../../unique-ui/components/InputForSearch";
import Text from "../../unique-ui/components/Text";

//types
import {
  BackgroundColor,
  BorderColor,
  ForegroundColor,
} from "../../unique-ui/types/Color";

const Frame = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Body = styled.div`
  width: 100vw;
`;
const FirstSection = styled.section`
  width: 100%;
  padding: 50px;
`;

function ConsoleHome() {
  return (
    <Frame>
      <NavbarForConsole />
      <Body>
        <FirstSection>
          {/* header*/}
          <Box
            height="57px"
            backgroundColor={BackgroundColor.Light}
            borderWidth="1px"
            borderColor={BorderColor.Dark}
            justifyContent="center"
          >
            <Navigation
              items={appCategories}
              gap="11.5px"
              onChange={(index: number) => {}}
            />
          </Box>
          {/* subheader*/}
          <Box
            height="57px"
            borderWidth="1px"
            backgroundColor={BackgroundColor.Light}
            borderBottomColor={BorderColor.Dark}
            borderLeftColor={BorderColor.Dark}
            borderRightColor={BorderColor.Dark}
            justifyContent="flex-start"
          >
            <Box
              width="420px"
              backgroundColor={BackgroundColor.Light}
              borderRightColor={BorderColor.Dark}
              borderWidth="1px"
            >
              <InputForSearch />
            </Box>
          </Box>
          {/* contents field */}
          <Box
            height="300px"
            justifyContent="flex-start"
            alignItems="flex-start"
            padding="20px 30px"
          >
            {apps.map((e, i) => (
              <BoxForLink
                to={e.to}
                key={i}
                width="300px"
                height="100px"
                backgroundColor={BackgroundColor.Light}
                shadowOpacity={0.16}
                flexDirection="column"
              >
                <BoxForIcon
                  fontSize="30px"
                  height="40px"
                  backgroundColor={BackgroundColor.Light}
                >
                  {e.icon}
                </BoxForIcon>
                <Text fontSize="20px" text={e.name} />
                <Text text={e.description} />
              </BoxForLink>
            ))}
          </Box>
        </FirstSection>
      </Body>
    </Frame>
  );
}

export default ConsoleHome;

const appCategories = [
  { icon: <IoAppsSharp />, innerText: "All" },
  { icon: <BiCodeBlock />, innerText: "Coding" },
  { icon: <AiOutlineDatabase />, innerText: "Database" },
  { icon: <BsCpu />, innerText: "Things" },
  { icon: <VscGraph />, innerText: "Visual" },
];

interface App {
  icon: React.ReactElement;
  name: string;
  description: string;
  to: string;
}
const apps: App[] = [
  {
    icon: <AiOutlineRobot />,
    name: "Physical  Computing",
    description: "Can cloud coding using IoT devices.",
    to: "/console ",
  },
];
