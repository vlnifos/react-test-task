import { Breadcrumbs } from "components/breadcrumbs/Breadcrumbs"
import styled from "styled-components"
import { useCurrentRoute } from "utils/hooks"
import { ExamHeader } from "./ExamHeader"
import { AddQuestionHeader } from "./AddQuestionHeader"
import { routes } from "utils/consts"

export const Header = (props: any) => {
  const {
    params,
    route: { path },
  } = useCurrentRoute()

  const routeName = {
    [routes.home]: "home",
    [routes.examById]: "exam",
    [routes.addQuestion]: "addQuestion",
  }[path || "/"]!

  const breadcrumbs = {
    home: ["Home"],
    exam: ["Exams", `Exam id: ${params.id}`],
    addQuestion: ["Exams", `Exam id: ${params.id}`, "New question"],
  }[routeName] as string[]

  return (
    <HeaderStyled>
      <div>
        <Breadcrumbs texts={breadcrumbs} />
        <input type="text" value={"SOmething"} onChange={() => {}} />
      </div>

      {routeName === "exam" ? <ExamHeader /> : <AddQuestionHeader />}
    </HeaderStyled>
  )
}

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`
