import styled from "styled-components";
import { IoAppsSharp } from "react-icons/io5";

const Frame = styled.div`
  width: 50px;

  font-size: 26px;
`;

function AppsBtn() {
  return (
    <Frame>
      <IoAppsSharp />
    </Frame>
  );
}

export default AppsBtn;
