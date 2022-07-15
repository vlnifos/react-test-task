import { useState } from "react"
import styled from "styled-components"
import { Question } from "utils/types"

type Props = {
  question: Question
}

export const QuestionItem = (props: Props) => {
  const [isShowAnswers, setIsShowAnswers] = useState(false)

  const { id, type, text, images, points } = props.question

  const renderImages = () => images.map((x) => <img src={x} alt="img" />)

  return (
    <div>
      <FlexRowJustifyBetween>
        <span>{id}</span>
        <span>{type}</span>
        <span>{points}</span>
        <span>ACTIONS</span>
      </FlexRowJustifyBetween>
      <div>
        <span>{text}</span>
        <div>{renderImages()}</div>
      </div>

      {isShowAnswers && (
        <div>
          <div>ANSWERS</div>
        </div>
      )}

      <button onClick={() => setIsShowAnswers(!isShowAnswers)}>
        {isShowAnswers ? "Hide answers" : "Show answers"}
      </button>
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
