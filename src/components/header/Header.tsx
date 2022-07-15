import { Breadcrumbs } from "components/breadcrumbs/Breadcrumbs"
import styled from "styled-components"

export const Header = (props: any) => {
  return (
    <FlexRowSpaceBetween>
      <div>
        <Breadcrumbs texts={["some", "thing"]} />
        <input type="text" value={"SOmething"} />
      </div>

      <FlexRow>
        <button>Delete Exam</button>

        <button>Save Exam</button>
      </FlexRow>
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
