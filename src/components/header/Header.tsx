import { Breadcrumbs } from "components/breadcrumbs/Breadcrumbs"
import styled from "styled-components"
import { useCurrentRoute } from "utils/hooks"
import { ExamHeader } from "./ExamHeader"
import { AddQuestionHeader } from "./AddQuestionHeader"
import { routes } from "utils/consts"
import { EditableTitle } from "components/editable-title/EditableTitle"

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
    home: {
      icon: "https://file.rendit.io/n/ifOTZoUQ9lrq2TQaPvS7.png",
      texts: ["Home"],
    },
    exam: {
      icon: "https://file.rendit.io/n/ifOTZoUQ9lrq2TQaPvS7.png",
      texts: ["Exams", `Exam id: ${params.id}`],
    },
    addQuestion: {
      icon: "https://file.rendit.io/n/ifOTZoUQ9lrq2TQaPvS7.png",
      texts: ["Exams", `Exam id: ${params.id}`, "New question"],
    },
  }[routeName]!

  return (
    <HeaderStyled>
      <div>
        {breadcrumbs && (
          <Breadcrumbs texts={breadcrumbs.texts} icon={breadcrumbs.icon} />
        )}
        <EditableTitle title={"Editable Title"} onChange={() => {}} />
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
