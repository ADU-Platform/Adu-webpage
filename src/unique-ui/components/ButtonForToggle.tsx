import { useEffect, useState } from "react";
import styled from "styled-components";
import { BGC, FGC } from "../types/Color";

const Frame = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  gap: 6px;
  border-radius: 4px;
  padding: 6px 10px;

  cursor: pointer;

  transition: all 0.2s ease-in-out;
`;

const Text = styled.span`
  position: relative;
  top: 1px;
`;

interface Props {
  icon?: React.ReactElement;
  fontSize?: string;
  innerText?: string; //Button text
  disabled?: boolean;
  canClick?: boolean;
  handleClick?: Function;
  toggle?: boolean;
}

function ButtonForToggle({ ...p }: Props) {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    //console.log(p.innerText, "->", p.toggle, p.canClick);
    if (p.toggle) setToggle((p) => !p);
  }, [p.toggle]);
  return (
    <Frame
      onClick={() => {
        if (!p.disabled && p.canClick) setToggle((p) => !p);
        if (p.handleClick) p.handleClick();
      }}
      style={{
        backgroundColor: toggle ? FGC.Dimmest : BGC.Light,
        color: toggle ? BGC.Light : FGC.Dimmest,
        fontSize: p.fontSize || "14px",
        opacity: p.disabled ? 0.5 : 1,
      }}
    >
      {p.icon}
      <Text>{p.innerText}</Text>
    </Frame>
  );
}

export default ButtonForToggle;
