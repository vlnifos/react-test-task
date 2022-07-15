import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "app/store"

export interface ExamState {
  currentRoute: string
}

const initialState: ExamState = {
  currentRoute: "",
}

export const headerSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    setCurrentRoute(state, action) {
      state.currentRoute = action.payload
    },
  },
})

export const selectCurrentRoute = (state: RootState) =>
  state.header.currentRoute

export default headerSlice.reducer

export const { setCurrentRoute } = headerSlice.actions
