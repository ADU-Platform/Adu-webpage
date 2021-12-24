//design stuff
import styled from "styled-components";
import { VscChevronDown, VscFile, VscNewFile } from "react-icons/vsc";
import { useState } from "react";
import { BackgroundColor } from "../../types/Colors";
import { Card } from "../../components/Card";
import { Text, TextForIcon } from "../../components/Text";
import { ButtonForIcon } from "../../components/Button";

//type
export interface File {
  name: string;
  value: string;
}

interface Props {
  sketches: File[];
  currentSketchName: string;
  setSketchName: Function;
}
const Frame = styled.div`
  width: 100%;
  user-select: none;
  .card {
    justify-content: flex-start;
  }
  div {
    display: flex;
    width: 100%;
  }
  .top {
    align-items: center;
    .button-group {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
  .bottom {
    margin-top: 5px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .file {
    padding: 1px;
    gap: 5px;
    border-radius: 4px;
    cursor: pointer;
    user-select: none;
  }
  .file:hover {
    background-color: ${BackgroundColor.Higher};
    opacity: 0.9;
  }
`;
export default function Files(props: Props) {
  const [hidden, setHidden] = useState(false);
  return (
    <Frame>
      <Card noShadow size="100% inherit">
        <div className="top">
          <Text>Files</Text>
          <div className="button-group">
            <ButtonForIcon>
              <VscNewFile />
            </ButtonForIcon>
            <ButtonForIcon onClick={() => setHidden((p) => !p)}>
              <VscChevronDown />
            </ButtonForIcon>
          </div>
        </div>
        <div className="bottom" hidden={hidden}>
          {props.sketches.map((e, i) => (
            <div
              key={i}
              className="file"
              style={{
                backgroundColor:
                  props.currentSketchName === e.name
                    ? BackgroundColor.Higher
                    : "",
              }}
              onClick={() => {
                props.setSketchName(e.name);
              }}
            >
              <TextForIcon>
                <VscFile />
              </TextForIcon>
              <Text>{e.name}</Text>
            </div>
          ))}
        </div>
      </Card>
    </Frame>
  );
}
