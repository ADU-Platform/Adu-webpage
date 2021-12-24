import styled from "styled-components";
import { Size } from "../types/Size";

import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";
import { ForegroundColor } from "../types/Colors";

interface PropsForBulb {
  size?: Size;
  mode: "on" | "loading" | "off";
}
const FrameForBulb = styled.div<PropsForBulb>`
  font-size: ${(p) => {
    let size = 20;
    if (p.size) size *= p.size * 1.5;

    return `${size}px`;
  }};
  color: ${ForegroundColor.Dark};
  position: relative;
  bottom: 2px;
  .shake-object {
    animation: shake 0.82s ease-in-out infinite;
    transform: translate3d(0, 0, 0);
  }

  @keyframes shake {
    5%,
    45% {
      transform: translate3d(-1px, 0, 0);
    }
    10%,
    40% {
      transform: translate3d(1px, 0, 0);
    }
    15%,
    25%,
    35% {
      transform: translate3d(-1px, 0, 0);
    }
    20%,
    30% {
      transform: translate3d(1px, 0, 0);
    }
  }
`;
export function Bulb(props: PropsForBulb) {
  return (
    <FrameForBulb {...props}>
      {props.mode === "on" ? <FaLightbulb /> : null}
      {props.mode === "loading" ? (
        <FaRegLightbulb className="shake-object" />
      ) : null}
      {props.mode === "off" ? <FaRegLightbulb /> : null}
    </FrameForBulb>
  );
}
