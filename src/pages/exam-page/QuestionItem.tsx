import { SoloBtn } from "components/button/Button"
import { Card } from "components/card/Card"
import { Img } from "components/Img/Img"
import { useState } from "react"
import styled from "styled-components"
import { humanReadableQuestionType } from "utils/consts"
import { Question } from "utils/types"
import { QuestionItemAnswers } from "./QuestionItemAnswers"

type Props = {
  question: Question
}

export const QuestionItem = (props: Props) => {
  const [isShowAnswers, setIsShowAnswers] = useState(false)

  const { id, type, text, images, points, answers } = props.question

  const renderImages = () => images.map((x) => <Img src={x} key={x} />)

  return (
    <Card>
      <FlexRowJustifyBetween>
        <span>{id}</span>

        <QuestionType type={type}>
          {humanReadableQuestionType[type]}
        </QuestionType>

        <span>{points}</span>
        <span>ACTIONS</span>
      </FlexRowJustifyBetween>

      <QuestionDetails>
        <div>
          <span>{text}</span>
          <div>{renderImages()}</div>
        </div>

        {isShowAnswers && <QuestionItemAnswers type={type} answers={answers} />}

        <SoloBtn onClick={() => setIsShowAnswers(!isShowAnswers)}>
          {isShowAnswers ? "Hide Answer(s)" : "Show Answer(s)"}
        </SoloBtn>
      </QuestionDetails>
    </Card>
  )
}

const FlexRowJustifyBetween = styled.div`
  display: flex;
  justify-content: space-between;
`

const colors = {
  multiple_choice: "#8CB89F",
  matching: "#8C9AB8",
}

const QuestionType = styled.div<{ type: "multiple_choice" | "matching" }>`
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => colors[props.type]};

  background: ${(props) => colors[props.type]};

  color: white;

  padding: 0 5px;
`

const QuestionDetails = styled.div`
  margin-left: 20px;
`
