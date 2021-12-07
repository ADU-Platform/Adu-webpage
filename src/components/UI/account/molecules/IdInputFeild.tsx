import styled from "styled-components";
import Input from "../atoms/Input";
import Label from "../atoms/Label";

const Frame = styled.div``;

function IdInputFeild() {
  return (
    <Frame>
      <Label text="email or username" />
      <Input type="text" />
    </Frame>
  );
}

export default IdInputFeild;
