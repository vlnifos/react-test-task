import { useAppSelector } from "app/hooks"
import { useGetExamDataQuery } from "features/exam/examApi"
import { selectExam } from "features/exam/examSlice"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router"
import styled from "styled-components"
import { HeadCard } from "./HeadCard"
import { QuestionItem } from "./QuestionItem"
import { Schools } from "./Schools"

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
          <ExamDetailsLeft>
            {/* Grade */}
            <HeadCard
              rows={[
                {
                  img: "https://file.rendit.io/n/XOhfXwyeLg9w2g87N8Ww.png",
                  title: "Grade",
                  subtitle: exam.head.grade,
                },
              ]}
            />

            {/* Subject */}
            <HeadCard
              rows={[
                {
                  img: "https://file.rendit.io/n/HDzKr6UVs1swOAqhsV26.png",
                  title: "Subject Area",
                  subtitle: exam.head.subject,
                },
              ]}
            />
          </ExamDetailsLeft>
          <ExamDetailsRight>
            {/* Cource & Time */}
            <HeadCard
              rows={[
                {
                  img: "https://file.rendit.io/n/kdJ66s16BX13vQti19sx.png",
                  title: "Course",
                  subtitle: exam.head.course,
                },
                {
                  img: "https://file.rendit.io/n/QSpBD66RTSrWxcgLAHUR.png",
                  title: "Amount of Time to Complete the Exam ",
                  subtitle: exam.head.time,
                },
              ]}
            />
          </ExamDetailsRight>
        </ExamDetails>

        <QuestionsContainer>
          <FlexRowSpaceBetween>
            <span>Questions ({exam.questions.length})</span>

            <AddQuestionBtn onClick={navigateToNewQuestion}>
              + Add question
            </AddQuestionBtn>
          </FlexRowSpaceBetween>
          <div style={{ marginTop: "20px" }}>
            <FlexRowSpaceBetween style={{ marginBottom: "15px" }}>
              <SubTitle>#</SubTitle>
              <SubTitle>Question</SubTitle>
              <SubTitle>Standart</SubTitle>
              <SubTitle>Actions</SubTitle>
            </FlexRowSpaceBetween>
            {renderQuestions()}
          </div>
        </QuestionsContainer>
      </LeftColumn>

      <RightColumn>
        <Schools schools={exam.schools} />
      </RightColumn>
    </MainPage>
  )
}

const FlexRowSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const AddQuestionBtn = styled.button`
  padding: 10px;
  background: none;
  color: #4282aa;
  &: hover {
    opacity: 70%;
  }

  border-color: #4282aa;
  border-style: solid;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 8px 16px;
  border-width: 1px;
  cursor: pointer;
`
const MainPage = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`
const LeftColumn = styled.div`
  width: 65%;
`
const RightColumn = styled.div`
  width: 33%;
`
const ExamDetails = styled.div`
  display: flex;
  justify-content: space-between;
`
const ExamDetailsLeft = styled.div`
  width: 37%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const ExamDetailsRight = styled.div`
  width: 60%;
`
const QuestionsContainer = styled.div`
  margin-top: 20px;
`
const SubTitle = styled.div`
  color: #727e83;
`
