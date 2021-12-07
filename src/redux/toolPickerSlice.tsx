import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum ToolKind {
  Files,
  Packages,
  Setting,
}
export interface ITool {
  kind: ToolKind;
  isSelected: boolean;
}

const initialState: { list: ITool[] } = {
  list: [
    {
      kind: ToolKind.Files,
      isSelected: true,
    },
    {
      kind: ToolKind.Packages,
      isSelected: false,
    },
    {
      kind: ToolKind.Setting,
      isSelected: false,
    },
  ],
};

export const sideItemSlice = createSlice({
  name: "toolPicker",
  initialState,
  reducers: {
    replaceTool: (state, action: PayloadAction<ToolKind>) => {
      const selectedKind = action.payload;
      //console.log(selectedKind);

      state.list.map((i) => {
        if (i.kind === selectedKind) i.isSelected = true;
        else i.isSelected = false;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { replaceTool } = sideItemSlice.actions;

export default sideItemSlice.reducer;
