import styled from "styled-components";
import Input from "../atoms/Input";
import Label from "../atoms/Label";

const Frame = styled.div``;

function PwInputFeild() {
  return (
    <Frame>
      <Label text="password" />
      <Input type="password" />
    </Frame>
  );
}

export default PwInputFeild;
