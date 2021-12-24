import styled from "styled-components";

//square-ui
import { Button } from "../../square-ui/components/Button";
import { NavbarForWorkspace } from "../../square-ui/components/Navbar";
import { Size } from "../../square-ui/types/Size";

const Frame = styled.div``;

//workspace home
function Search() {
  return (
    <Frame>
      <NavbarForWorkspace userName={null} />
    </Frame>
  );
}

export default Search;
