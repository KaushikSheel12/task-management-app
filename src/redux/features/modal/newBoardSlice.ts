import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface BoardModalState {
  status: boolean;
}

const initialState: BoardModalState = {
  status: false,
};

export const boardModalSlice = createSlice({
  name: "newBoardModal",
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<boolean>) => {
      state.status = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = boardModalSlice.actions;

export default boardModalSlice.reducer;
