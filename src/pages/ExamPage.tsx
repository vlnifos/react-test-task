import { useAppSelector } from "app/hooks"
import { useGetExamDataQuery } from "features/exam/examApi"
import { selectExam } from "features/exam/examSlice"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router"
import styled from "styled-components"

export const ExamPage = (props: any) => {
  const params = useParams()
  const navigate = useNavigate()
  const exam = useAppSelector(selectExam)

  const query = useGetExamDataQuery("nothing")

  useEffect(() => {
    console.log("qeury eXampPAge", query.data)
  }, [query])

  const navigateToNewQuestion = () =>
    navigate(`/exams/${params.id}/addquestion`)

  return (
    <div>
      <span>Exam</span>
      {exam.head.course}
      {exam.head.subject}
      {exam.head.time}

      <AddQuestionBtn onClick={navigateToNewQuestion}>
        + Add question
      </AddQuestionBtn>
    </div>
  )
}

const AddQuestionBtn = styled.button`
  padding: 10px;
`
