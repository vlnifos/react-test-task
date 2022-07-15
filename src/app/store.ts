import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "features/counter/counterSlice"
import { examApi } from "features/exam/examApi"
import examReducer from "features/exam/examSlice"
import addQuestionReducer from "features/add-question/addQuestionSlice"
import headerReducer from "features/header/headerSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    exam: examReducer,
    addQuestion: addQuestionReducer,
    header: headerReducer,
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
