import { Link } from "react-router-dom";
import styled from "styled-components";
import { BackgroundColor } from "../../../square-ui/styles/Colors";
import Button from "../inputs/Button";

interface Props {}
export default function Navigation(p: Props) {
  return (
    <Frame {...p}>
      <div className="links">
        <Button text value="Workspace" href="/workspace" />
        <Button text value="Marketplace" href="/marketplace" />
        <Button text value="Support" href="/support" />
      </div>
    </Frame>
  );
}

const Frame = styled.nav`
  height: 30px;
  padding: 0 20vw;
  background-color: ${BackgroundColor.Default};

  display: flex;
  align-items: center;

  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);

  .links {
    display: flex;
    align-items: center;

    gap: 30px;
  }
`;
