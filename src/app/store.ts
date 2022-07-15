import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "features/counter/counterSlice"
import { examApi } from "features/exam/examApi"
import examReducer from "features/exam/examSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    exam: examReducer,
    [examApi.reducerPath]: examApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(examApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
