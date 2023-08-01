import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SidebarState {
  status: boolean;
}

const initialState: SidebarState = {
  status: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<boolean>) => {
      state.status = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = sidebarSlice.actions;

export default sidebarSlice.reducer;
