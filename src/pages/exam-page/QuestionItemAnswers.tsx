import { HorizontalLine } from "components/horizontal-line/HorizontalLine"
import { Img } from "components/Img/Img"
import styled from "styled-components"

type Props = {
  type: "multiple_choice" | "matching"
  answers: any[]
}

export const QuestionItemAnswers = (props: Props) => {
  const renderImages = (images: string[]) =>
    images.map((el: string) => <Img src={el} alt="" key={el} />)

  const renderMultipleChoiceAnswers = () => {
    return props.answers.map((x) => (
      <div key={x.id}>
        <span>{x.id}. </span>
        <span>{x.text}</span>

        <div>{renderImages(x.images)}</div>

        {x.isCorrectAnswer && (
          <CorrectAnswerText>Correct Answer</CorrectAnswerText>
        )}
      </div>
    ))
  }

  const renderMatchingAnswers = () => []

  const renderAnswers = {
    multiple_choice: renderMultipleChoiceAnswers,
    matching: renderMatchingAnswers,
  }

  return (
    <div>
      <div>
        <HorizontalLine />
        <Title>Answer(s)</Title>
      </div>

      {renderAnswers[props.type]()}
    </div>
  )
}

const Title = styled.div`
  color: #4282aa;
  margin-bottom: 20px;
`
const CorrectAnswerText = styled.div`
  color: #285f17;
`
