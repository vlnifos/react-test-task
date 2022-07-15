import { AddQuestion } from "pages/AddQuestion"
import { ExamPage } from "pages/ExamPage"
import { ExamsList } from "pages/ExamsList"
import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"

export const RoutesList = (props: any) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/exams" replace />} />
      <Route path="/exams" element={<ExamsList />} />
      <Route path="/exams/:id" element={<ExamPage />} />
      <Route path="/exams/:id/addquestion" element={<AddQuestion />} />
    </Routes>
  )
}
