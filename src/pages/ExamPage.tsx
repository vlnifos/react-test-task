import { useNavigate, useParams } from "react-router"
import styled from "styled-components"

export const ExamPage = (props: any) => {
  const params = useParams()
  const navigate = useNavigate()

  console.log('Exam props', props, params)

  const navigateToNewQuestion = () => {

    navigate(`/exams/${params.id}/addquestion`)
  }

  return (
    <div>
      <span>Exam</span>

      <AddQuestionBtn onClick={navigateToNewQuestion}>
        + Add question
      </AddQuestionBtn>
    </div>
  )
} 

const AddQuestionBtn = styled.button`
  padding: 10px;
`