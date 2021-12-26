import styled from "styled-components";
import { BackgroundColor } from "../../../square-ui/styles/Colors";
import { FontSizes, FontWeights } from "../../styles/typography";
import Heading from "../data display/Heading";
import Button from "../inputs/Button";

import { VscSettingsGear, VscQuestion } from "react-icons/vsc";

interface Props {}
export default function Header(p: Props) {
  return (
    <Frame {...p}>
      <Heading value="adu" fontSize="32px" fontWeight={700} />
      <div className="side">
        <div className="secondary">
          <Button text value="Contact Us" href="/contactus" fontSize="14px" />
          <Button text value="Support" href="/support" fontSize="14px" />
          <Button text icon={<VscSettingsGear />} href="/setting" />
        </div>
        <div className="account">
          <Button text value="Sign In" href="/signin" />
          <Button contained value="Sign Up" href="/signup" />
        </div>
      </div>
    </Frame>
  );
}

const Frame = styled.header`
  height: 60px;
  padding: 0 20vw;
  background-color: ${BackgroundColor.Default};

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);

  .side {
    display: flex;
    gap: 30px;
  }
  .secondary {
    display: flex;
    gap: 10px;
  }
  .account {
    display: flex;
    gap: 10px;
  }
`;
