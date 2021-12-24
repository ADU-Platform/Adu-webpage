import React, { useEffect, useRef, useState } from "react";

//design stuff
import styled from "styled-components";
import { Card } from "../../../square-ui/components/Card";
import { NavbarForWorkspace } from "../../../square-ui/components/Navbar";

//ide-components
import Connections from "../../../square-ui/ide-components/essentials/Connection";
import Files, {
  File,
} from "../../../square-ui/ide-components/essentials/Files";
import PropjectBoard from "../../../square-ui/ide-components/essentials/PropjectBoard";
import Toolbar from "../../../square-ui/ide-components/essentials/Toolbar";

export interface Connection {
  name: string;
  serialCode: string;
}

const Frame = styled.div`
  .editor {
    gap: 20px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
  .extensions {
    width: 250px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .core {
    width: 40vw;
    min-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .card {
      flex-direction: row;
      justify-content: space-between;
    }
    textarea {
      width: 100%;
      height: 100%;

      background-color: transparent;

      outline: none;
      border: none;
      resize: none;
    }
  }
`;
const files: File[] = [
  {
    name: "main.py",
    value: `hello()`,
  },
  {
    name: "print.py",
    value: `def hello():
    print("hello");`,
  },
];

//workspace -> physicalcomputing -> Editor
function IDE() {
  const [fileName, setFileName] = useState("main.py");

  return (
    <Frame>
      <NavbarForWorkspace userName={null} />
      <div className="editor">
        <div className="extensions">
          <PropjectBoard />
          <Connections />
          <Files
            sketches={files}
            currentSketchName={fileName}
            setSketchName={setFileName}
          />
        </div>
        <div className="core">
          {/* toolbar */}
          <Toolbar />

          {/* code field */}
          <Card noShadow size="100% 60vh">
            <textarea value={files[1].value}></textarea>
          </Card>
        </div>
      </div>
    </Frame>
  );
}

export default IDE;
