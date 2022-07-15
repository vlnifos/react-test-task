import { AddQuestion } from "pages/add-question/AddQuestion"
import { ExamPage } from "pages/ExamPage"
import { ExamsList } from "pages/ExamsList"
import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { routes } from "utils/consts"

export const RoutesList = (props: any) => {
  return (
    <Routes>
      <Route path={routes.home} element={<Navigate to="/exams" replace />} />
      <Route path={routes.exams} element={<ExamsList />} />
      <Route path={routes.examById} element={<ExamPage />} />
      <Route path={routes.addQuestion} element={<AddQuestion />} />
    </Routes>
  )
}
