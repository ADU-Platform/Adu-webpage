import styled from "styled-components";

import Text from "../components/Text";

//styles
import { BackgroundColor } from "../styles/Colors";

interface Props {}
const Frame = styled.header`
  width: 100%;
  height: 70px;

  background-color: ${BackgroundColor.Default};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 10vw;
`;
export default function Header(p: Props) {
  return (
    <Frame>
      <Text fontWeight={700} fontSize="32px">
        adu
      </Text>
    </Frame>
  );
}
