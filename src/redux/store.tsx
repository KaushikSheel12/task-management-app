import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from "../redux/features/sidebar/sidebarSlice"
import boardModalReducer from "../redux/features/modal/newBoardSlice"
import boardsReducer from "../redux/features/boards-coloumns/newBoardSlice"
import taskModalReducer from "../redux/features/modal/newTaskModalSlice"

export const store = configureStore({
  reducer: {
    sidebarStatus:sidebarReducer,
    boardModal:boardModalReducer,
    boards:boardsReducer,
    taskModal:taskModalReducer
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch