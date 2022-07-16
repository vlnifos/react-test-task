import { Card } from "components/card/Card"
import { Img } from "components/Img/Img"
import { useState } from "react"
import styled from "styled-components"
import { humanReadableQuestionType } from "utils/consts"
import { Question } from "utils/types"

type Props = {
  question: Question
}

export const QuestionItem = (props: Props) => {
  const [isShowAnswers, setIsShowAnswers] = useState(false)

  const { id, type, text, images, points } = props.question

  const renderImages = () => images.map((x) => <Img src={x} alt="img" />)

  return (
    <Card>
      <FlexRowJustifyBetween>
        <span>{id}</span>
        <span>{humanReadableQuestionType[type]}</span>
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
        {isShowAnswers ? "Hide Answer(s)" : "Show Answer(s)"}
      </button>
    </Card>
  )
}

const FlexRowJustifyBetween = styled.div`
  display: flex;
  justify-content: space-between;
`
