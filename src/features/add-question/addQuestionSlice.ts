import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "app/store"
import { Question } from "utils/types"

const initialState: Question = {
  text: "",
  comments: "",
  points: 1,
  type: "multiple_choice",
  answers: [],
}

type SetQuestionDataType = {
  type: keyof Omit<Question, "answers">
  data: string & number
}

export const addQuestionSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    setQuestionData(state, action: PayloadAction<SetQuestionDataType>) {
      const { type, data } = action.payload
      state[type] = data
    },
  },
})

export const selectQuestion = (state: RootState) => state.addQuestion

export default addQuestionSlice.reducer

export const { setQuestionData } = addQuestionSlice.actions
