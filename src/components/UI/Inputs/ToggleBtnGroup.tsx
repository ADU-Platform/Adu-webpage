import { Children, ReactNode, useEffect } from "react";
import styled from "styled-components";

interface IAttrs {
  gap: string;
  flexDirection: string;
}
const Frame = styled.div.attrs(({ ...attrs }: IAttrs) => attrs)`
  display: flex;
  flex-direction: ${(p) => p.flexDirection};
  gap: ${(p) => p.gap};
`;

interface IProps {
  children: JSX.Element[];
  gap?: string;
  flexDirection?: string;
}

function ToggleBtnGroup(props: IProps) {
  useEffect(() => {
    props.children.map((e) => {
      console.log(e);
    });
  }, []);

  const handleChange = () => {
    console.log("hellog");
  };

  return (
    <Frame flexDirection={props.flexDirection} gap={props.gap}>
      {props.children}
    </Frame>
  );
}

export default ToggleBtnGroup;
