import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IBoards, INewTask } from "../../../interface/IBoardsColumns";

export interface BoardsState {
  boards: IBoards[];
  selectedBoard: IBoards;
}

const initialState: BoardsState = {
  boards: [],
  selectedBoard: {} as IBoards,
};

export const boardSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    addToBoard: (state, action: PayloadAction<IBoards>) => {
      state.boards = [...state.boards, action.payload];
    },
    selectBoard: (state, action: PayloadAction<IBoards>) => {
      state.selectedBoard = action.payload;
    },
    addTask: (state, action: PayloadAction<INewTask>) => {
      const {
        payload: { title },
      } = action;

      const selectedColumn = state?.selectedBoard?.columns?.find(
        ({ columnTitle }) => columnTitle === title
      );

      console.log(state, selectedColumn);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBoard, selectBoard, addTask } = boardSlice.actions;

export default boardSlice.reducer;
