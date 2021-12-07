import styled from "styled-components";

const Frame = styled.div`
  text-align: left;
  font-size: 19px;
  color: ${(p) => p.theme.fg.dimmer};

  margin-top: 20px;

  user-select: none;
`;

function Label({ text }: { text: string }) {
  return <Frame>{text}</Frame>;
}

export default Label;
