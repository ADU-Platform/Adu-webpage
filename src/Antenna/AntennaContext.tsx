//socket io
import { io, Socket } from "socket.io-client";
const TARGET_URL = "http://122.45.106.144:5000";

import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import GridSpinner from "../components/UI/Useful/GridSpinner";
import FloatingSatellite from "../components/UI/Useful/FloatingSatellite";
import { BarLoader, ClipLoader } from "react-spinners";
import { useParams } from "react-router-dom";

export interface IAntenna {
  id?: string;
  isLinked?: boolean;
}

const Context = React.createContext<IAntenna>({});

interface IProps {
  children: React.ReactElement[] | React.ReactElement;
}

const Frame = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  gap: 10px;

  text-align: center;
`;
const LoadingTextField = styled.span`
  color: ${(p) => p.theme.fg.dimmer};
  font-weight: 600;
  width: 100%;
`;

function AntennaContext({ children }: IProps) {
  const { roomId } = useParams();
  const [state, setState] = useState<IAntenna>({});
  const [socket, setSocket] = useState<Socket>();
  const [loadingMsg, setLoadingMsg] = useState<string>("");

  useEffect(() => {
    if (roomId) {
      setSocket(io(TARGET_URL));
    } else {
      console.log("Should you select the serial code.");
    }
  }, []);

  useEffect(() => {
    console.log(socket);
    if (socket?.connected) {
      //console.log(socket);
      setLoadingMsg("Completing to get a node into the Satellite.");

      socket.on("connect", () => {
        //console.log(socket.id);
        setLoadingMsg("Completing to connect.");
      });
    } else {
      setLoadingMsg("Trying to connect.");
    }
  }, [socket]);

  return (
    <Context.Provider value={state}>
      <Frame>
        {/* {state.isLinked ? (
          children
        ) : (
          <>
            <BarLoader loading={true} width="100%" speedMultiplier={0.7}/>
            <LoadingTextField>{loadingMsg}</LoadingTextField>
          </>
        )} */}
        {children}
      </Frame>
    </Context.Provider>
  );
}

export const useAntenna = () => useContext(Context);
export default AntennaContext;
