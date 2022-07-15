import { useAppDispatch } from "app/hooks"
import { Breadcrumbs } from "components/breadcrumbs/Breadcrumbs"
import styled from "styled-components"
import { headerBtns } from "utils/consts"
import { useCurrentPath } from "utils/hooks"
import { ExamHeader } from "./ExamHeader"
import { AddQuestionHeader } from "./AddQuestionHeader"
import { HeaderBtns } from "./HeaderBtns"

export const Header = (props: any) => {
  const currentPath = useCurrentPath()

  const route = {
    "/exams/:id": "exam",
    "/exams/:id/addquestion": "addQuestion",
  }[currentPath]

  return (
    <FlexRowSpaceBetween>
      <div>
        <Breadcrumbs texts={["some", "thing"]} />
        <input type="text" value={"SOmething"} onChange={() => {}} />
      </div>

      {route === "exam" ? <ExamHeader /> : <AddQuestionHeader />}
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
