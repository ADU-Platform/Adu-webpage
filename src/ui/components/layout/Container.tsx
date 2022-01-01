import styled from "styled-components";
import { BackgroundColor } from "../../styles/Colors";
import { FontSizes, FontWeights } from "../../styles/typography";

interface Props {
  width?: string;
  className?: string;

  children?: any;

  hidden?: boolean;
  onClick?: () => void;
}
export default function Container(p: Props) {
  return (
    <Frame className="container" {...p}>
      {p.children}
    </Frame>
  );
}

const Frame = styled.div<Props>`
  width: 300px;
  width: ${(p) => p.width || null};
  padding: 20px;

  border-radius: 4px;

  background-color: ${BackgroundColor.Default};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 30px;

  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;
