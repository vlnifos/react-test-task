import { useAppSelector } from "app/hooks"
import { useGetExamDataQuery } from "features/exam/examApi"
import { selectExam } from "features/exam/examSlice"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router"
import styled from "styled-components"
import { QuestionItem } from "./QuestionItem"

export const ExamPage = (props: any) => {
  const params = useParams()
  const navigate = useNavigate()
  const exam = useAppSelector(selectExam)

  console.log("paramsExam", params)

  const query = useGetExamDataQuery("nothing")

  useEffect(() => {
    console.log("qeury eXampPAge", query.data)
  }, [query])

  const navigateToNewQuestion = () =>
    navigate(`/exams/${params.id}/addquestion`)

  const renderQuestions = () =>
    exam.questions.map((x) => <QuestionItem question={x} key={x.id} />)

  return (
    <MainPage>
      <LeftColumn>
        <ExamDetails>
          <div>
            <div>
              <div>{exam.head.grade}</div>
              <div>{exam.head.subject}</div>
            </div>

            <div>
              {exam.head.course}
              {exam.head.time}
            </div>
          </div>
        </ExamDetails>

        <div>
          <FlexRowSpaceBetween>
            <span>Questions</span>

            <AddQuestionBtn onClick={navigateToNewQuestion}>
              + Add question
            </AddQuestionBtn>
          </FlexRowSpaceBetween>
          {renderQuestions()}
        </div>
      </LeftColumn>

      <RightColumn>
        {exam.schools.map((x) => (
          <div key={x}>{x}</div>
        ))}
      </RightColumn>
    </MainPage>
  )
}

const FlexRow = styled.div`
  display: flex;
`
const FlexRowSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`
const AddQuestionBtn = styled.button`
  padding: 10px;
`
const MainPage = styled.div`
  width: 100%;
  display: flex;
`
const LeftColumn = styled.div`
  width: 70%;
`
const RightColumn = styled.div`
  width: 30%;
`
const ExamDetails = styled.div`
  width: 30%;
`
