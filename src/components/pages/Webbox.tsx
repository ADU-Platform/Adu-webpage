//react
import React from "react";
import { useContext } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { ITool, replaceTool, ToolKind } from "../../redux/toolPickerSlice";
import { RootState } from "../../redux/store";

//templates
import CodeEditor from "../templates/CodeEditor";

//styled-components
import styled from "styled-components";

//contextAPI
interface IState {
  sideToolList?: ITool[];
  replaceTool?: Function;
}

//about the page of Webbox
const WebboxContext = React.createContext<IState>({});
export const useWebboxContext = () => useContext(WebboxContext);

const Frame = styled.div`
  width: 100vw;
  height: 100vh;
`;

function Webbox() {
  const dispatch = useDispatch();
  const state: IState = {
    sideToolList: useSelector((state: RootState) => state.toolPicker.list),
    replaceTool: (kind: ToolKind) => dispatch(replaceTool(kind)),
  };

  return (
    <Frame>
      <WebboxContext.Provider value={state}>
        <CodeEditor />
      </WebboxContext.Provider>
    </Frame>
  );
}

export default Webbox;
