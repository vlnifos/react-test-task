import styled from "styled-components"
import { Question } from "utils/types"

type Props = {
  question: Question
}

export const QuestionItem = (props: Props) => {
  const renderImages = () =>
    props.question.images.map((x) => <img src={x} alt="img" />)

  return (
    <div>
      <div>
        <div></div>
      </div>
      <div>{renderImages()}</div>
    </div>
  )
}

const FlexRow = styled.div`
  display: flex;
`
const FlexRowJustifyBetween = styled.div`
  display: flex;
  justify-content: space-between;
`
