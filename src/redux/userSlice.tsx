import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  email: string;
  loggedIn: boolean;
  isLoading: boolean;
}

const initialState: IState = {
  email: "",
  loggedIn: false,
  isLoading: false,
};

export const sideItemSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state) => {},
    signOut: (state) => {},
    signUp: (state) => {},
  },
});

// Action creators are generated for each case reducer function
export const {} = sideItemSlice.actions;

export default sideItemSlice.reducer;
