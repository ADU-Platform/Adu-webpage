import styled from "styled-components";
import { BackgroundColor, BorderColor } from "../types/Color";
import { FontWeight } from "../types/Text";

//components
import { Box, BoxForLink } from "../components/Box";
import TextForLink from "../components/TextForLink";
import Text from "../components/Text";

const Frame = styled.div`
  width: 100vw;
  height: 50px;
`;

function NavbarForConsole() {
  return (
    <Frame>
      <Box shadowOpacity={0.16} justifyContent="flex-start">
        <BoxForLink
          to="/console"
          width="186px"
          backgroundColor={BackgroundColor.Light}
          borderWidth="1px"
          borderRightColor={BorderColor.Dimmest}
        >
          <Text
            text="ADU console"
            fontSize="27px"
            fontWeight={FontWeight.Regular}
          />
        </BoxForLink>
      </Box>
    </Frame>
  );
}

export default NavbarForConsole;
