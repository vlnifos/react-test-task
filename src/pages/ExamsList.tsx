import { Navigate } from "react-router"

export const ExamsList = (props: any) => {
  // Since I don't need to do an exams list page, then I'll just redirect to the exam page
  return (
    <Navigate to="/exams/123" replace />
  )
} 