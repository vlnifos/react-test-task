import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "app/store"
import { Question } from "utils/types"
import { ExamData } from "./examApi"

export interface ExamState {
  head: {
    grade: string
    course: string
    subject: string
    time: string
  }
  schools: string[]
  questions: Question[]
}

const initialState: ExamState = {
  head: {
    course: "",
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
    setExamData: (state, action: PayloadAction<ExamData>) => {
      const { course, grade, schools, subject, time } = action.payload

      state.head = {
        course,
        grade,
        subject,
        time,
      }

      state.schools = schools
    },
    addQuestion: (state, action: PayloadAction<Question>) => {
      state.questions.push(action.payload)
    },
  },
})

export const selectExam = (state: RootState) => state.exam

export default examSlice.reducer

export const { setExamData, addQuestion } = examSlice.actions
