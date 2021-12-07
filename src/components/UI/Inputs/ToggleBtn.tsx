import { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";

export enum ToggleType {
  On,
  Off,
}

interface IAttrs {
  toggle: ToggleType;
  size: string;
}
const Frame = styled.div.attrs((attrs: IAttrs) => attrs)`
  width: ${(p) => p.size};
  height: ${(p) => p.size};
  border-radius: 6px;

  font-size: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: all 0.2s ease;

  background-color: ${(p) =>
    p.toggle === ToggleType.Off ? p.theme.bg.default : p.theme.fg.dimmer};
  color: ${(p) =>
    p.toggle === ToggleType.Off ? p.theme.fg.dimmest : p.theme.bg.root};
`;

interface IProps {
  children: JSX.Element;
  name: string;
  isSelected: boolean;
  size: string;
}

function ToggleBtn(props: IProps) {
  const [toggle, setToggle] = useState<ToggleType>(ToggleType.Off);
  useEffect(() => {
    if (props.isSelected) {
      setToggle(ToggleType.On);
    }
  }, [toggle]);
  return (
    <Frame toggle={toggle} size={props.size} onClick={() => {}}>
      {props.children}
    </Frame>
  );
}

export default ToggleBtn;
