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
      const nextId = state.questions[state.questions.length - 1].id + 1

      const question = {
        ...action.payload,
        id: nextId,
      }

      state.questions.push(question)
    },
  },
})

export const selectExam = (state: RootState) => state.exam

export default examSlice.reducer

export const { setExamData, addQuestion } = examSlice.actions
