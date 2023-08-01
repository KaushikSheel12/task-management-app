import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface NewTaskModalState {
  status: boolean;
}

const initialState: NewTaskModalState = {
  status: false,
};

export const newTaskModalSlice = createSlice({
  name: "newTaskdModal",
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<boolean>) => {
      state.status = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = newTaskModalSlice.actions;

export default newTaskModalSlice.reducer;
