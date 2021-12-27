import { VscAccount } from "react-icons/vsc";
import styled from "styled-components";
import { useEditor } from "../../back";
import Heading from "../../ui/components/data display/Heading";
import Button from "../../ui/components/inputs/Button";
import { BackgroundColor } from "../../ui/styles/Colors";

export default function Editor() {
  const { user } = useEditor();

  return (
    <Frame>
      <header>
        <div className="user-profile">
          <VscAccount />
          <Heading value={user?.email || ""} />
        </div>
        <Button></Button>
      </header>
    </Frame>
  );
}
const Frame = styled.div`
  header {
    width: 100vw;
    height: 50px;

    padding: 0 10vw;

    display: flex;
    align-items: center;
    gap: 10px;

    background-color: ${BackgroundColor.Default};
  }
`;
