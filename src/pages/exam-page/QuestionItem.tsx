import { IconBtn, SoloBtn } from "components/button/Button"
import { Card } from "components/card/Card"
import { Icon } from "components/icon/Icon"
import { Img } from "components/Img/Img"
import { useState } from "react"
import styled from "styled-components"
import { humanReadableQuestionType } from "utils/consts"
import { Question } from "utils/types"
import { QuestionItemAnswers } from "./QuestionItemAnswers"
import { QuestionItemHeader } from "./QuestionItemHeader"
import DeleteIcon from "assets/images/delete.svg"
import PencilIcon from "assets/images/pencil.svg"

type Props = {
  question: Question
}

export const QuestionItem = (props: Props) => {
  const [isShowAnswers, setIsShowAnswers] = useState(false)

  const { id, type, text, images, points, answers } = props.question

  const renderImages = () => images.map((x) => <Img src={x} key={x} />)

  return (
    <Container>
      <Card>
        <QuestionItemHeader
          id={<BoldSpan>{id}</BoldSpan>}
          type={
            <QuestionType type={type}>
              {humanReadableQuestionType[type]}
            </QuestionType>
          }
          standart={<span>{points}</span>}
          actions={
            <ActionsBtns>
              <IconBtn>
                <Icon src={DeleteIcon} size="small" />
              </IconBtn>

              <IconBtn>
                <Icon src={PencilIcon} size="small" />
              </IconBtn>
            </ActionsBtns>
          }
          color="#000"
          fullWidth
        />

        <QuestionDetails>
          <div>
            <span>{text}</span>
            <div>{renderImages()}</div>
          </div>

          {isShowAnswers && (
            <QuestionItemAnswers type={type} answers={answers} />
          )}

          <SoloBtn onClick={() => setIsShowAnswers(!isShowAnswers)}>
            {isShowAnswers ? "Hide Answer(s)" : "Show Answer(s)"}
          </SoloBtn>
        </QuestionDetails>
      </Card>
    </Container>
  )
}

const colors = {
  multiple_choice: "#8CB89F",
  matching: "#8C9AB8",
}

const BoldSpan = styled.span`
  font-weight: 600;
`
const Container = styled.div`
  margin-bottom: 16px;
`
const QuestionType = styled.div<{ type: "multiple_choice" | "matching" }>`
  display: inline-block;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => colors[props.type]};

  background: ${(props) => colors[props.type]};

  color: white;

  padding: 0 5px;
`

const QuestionDetails = styled.div`
  width: 65%;
  margin-left: 55px;
  margin-top: 8px;
`

const ActionsBtns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: 0 auto;
`
