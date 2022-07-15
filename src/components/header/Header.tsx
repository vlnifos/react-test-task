import { useAppDispatch } from "app/hooks"
import { Breadcrumbs } from "components/breadcrumbs/Breadcrumbs"
import styled from "styled-components"
import { headerBtns } from "utils/consts"
import { useCurrentRoute } from "utils/hooks"
import { ExamHeader } from "./ExamHeader"
import { AddQuestionHeader } from "./AddQuestionHeader"
import { HeaderBtns } from "./HeaderBtns"

export const Header = (props: any) => {
  const {
    params,
    route: { path },
  } = useCurrentRoute()

  const routeName = {
    "/": "home",
    "/exams/:id": "exam",
    "/exams/:id/addquestion": "addQuestion",
  }[path || "/"]!

  const breadcrumbs = {
    home: ["Home"],
    exam: ["Exams", `Exam id: ${params.id}`],
    addQuestion: ["Exams", `Exam id: ${params.id}`, "New question"],
  }[routeName] as string[]

  return (
    <FlexRowSpaceBetween>
      <div>
        <Breadcrumbs texts={breadcrumbs} />
        <input type="text" value={"SOmething"} onChange={() => {}} />
      </div>

      {routeName === "exam" ? <ExamHeader /> : <AddQuestionHeader />}
    </FlexRowSpaceBetween>
  )
}

const FlexRow = styled.div`
  display: flex;
`
const FlexRowSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`
