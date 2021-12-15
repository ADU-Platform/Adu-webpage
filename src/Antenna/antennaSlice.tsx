//socket io
import { io } from "socket.io-client";
const SOCKET_URL = "http://127.0.0.1:5000";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  socket: any;
}

const initialState: IState = {
  socket: undefined,
};

export const antennaSlice = createSlice({
  name: "antenna",
  initialState,
  reducers: {
    syncWithSatellite: (state) => {
      state.socket = io(SOCKET_URL);
      state.socket.on("connect", () => {
        console.log(state.socket.id + " is connecting with server!");
      });
    },
    leaveSatellite: (state) => {
      state.socket.on("disconnect", () => {
        console.log("leave the server.");
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { syncWithSatellite, leaveSatellite } = antennaSlice.actions;

export default antennaSlice.reducer;
