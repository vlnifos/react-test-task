import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "app/store"
import { useLocation } from "react-router"
import { Question } from "utils/types"

const initialState: Question = {
  id: 0,
  text: "",
  comments: "",
  points: 1,
  images: [],
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
    addAnswer(state) {
      const lastId = state.answers[state.answers.length - 1]?.id || 0

      state.answers.push({
        id: lastId + 1,
        images: [],
        isCorrectAnswer: false,
        text: "",
      })
    },
    setAnswerData(state, action: PayloadAction<{ id: number; item: any }>) {
      const { id, item } = action.payload

      const index = state.answers.findIndex((x) => x.id === id)
      state.answers[index] = item
    },
    clearQuestionData(state) {
      return {
        ...initialState,
      }
    },
  },
})

export const selectQuestion = (state: RootState) => state.addQuestion

export default addQuestionSlice.reducer

export const { setQuestionData, addAnswer, setAnswerData, clearQuestionData } =
  addQuestionSlice.actions
