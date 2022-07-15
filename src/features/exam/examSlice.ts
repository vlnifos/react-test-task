import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "app/store"
import { Question } from "utils/types"

export interface ExamState {
  head: {
    grade: string
    cource: string
    subject: string
    time: string
  }
  schools: string[]
  questions: Question[]
}

const initialState: ExamState = {
  head: {
    cource: "",
    grade: "",
    subject: "",
    time: "",
  },
  questions: [],
  schools: [],
}

export const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    getExamData: (state) => {},
    addQuestion: (state, action: PayloadAction<Question>) => {
      state.questions.push(action.payload)
    },
  },
})

export const selectExam = (state: RootState) => state.exam

export default examSlice.reducer
