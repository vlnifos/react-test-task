import { Img } from "components/Img/Img"
import { InputWithActions } from "components/input/InputWithActions"
import { OutlinedBtn } from "components/button/Button"
import { ImageSelector } from "./ImageSelector"
import styled from "styled-components"
import { Card } from "components/card/Card"
import { ImagesContainer } from "./ImagesContainer"
import { Checkbox } from "components/checkbox/Checkbox"
import { Icon } from "components/icon/Icon"
import CheckmarkIcon from "assets/images/checkmark.svg"
import PlusIcon from "assets/images/plus.svg"

type Props = {
  answers: any[]
  onChange: (id: number, payload: any) => void
  addAnswer: () => void
}

export const MultiChoice = (props: Props) => {
  const handleChange = (item: any, type: string, value: any) => {
    props.onChange(item.id, {
      ...item,
      [type]: value,
    })
  }

  const handleImageSelect = (item: any, img: any) => {
    const newItem = { ...item, images: [...item.images] }

    newItem.images.push(img)

    props.onChange(item.id, newItem)
  }

  const handleImageRemove = (item: any, image: string) => {
    const newItem = { ...item, images: [...item.images] }
    const index = newItem.images.findIndex((x: string) => x === image)
    newItem.images.splice(index, 1)

    props.onChange(item.id, newItem)
  }

  const renderImages = (item: any) =>
    item.images.map((el: string) => (
      <Img
        src={el}
        key={el}
        action={{
          handler: () => handleImageRemove(item, el),
        }}
      />
    ))

  const renderAnswers = () => {
    return props.answers.map((x) => (
      <AnswerContainer key={x.id}>
        <Card padding={false} borderColor={x.isCorrectAnswer && "#8CB89F"}>
          <InputWithActions
            placeholder="Answer Text..."
            value={x.text}
            solo
            fullWidth
            onChange={(el) => handleChange(x, "text", el.target.value)}
            actionLeft={
              <div
                style={{
                  margin: "7px 5px 0 5px",
                }}
              >
                <Checkbox
                  checked={x.isCorrectAnswer}
                  onChange={(value) =>
                    handleChange(x, "isCorrectAnswer", value)
                  }
                />
              </div>
            }
            actionRight={
              <ImageSelector
                onImageSelect={(img) => handleImageSelect(x, img)}
              />
            }
          />

          {x.images.length > 0 && (
            <ImagesContainer>{renderImages(x)}</ImagesContainer>
          )}
        </Card>

        {x.isCorrectAnswer && (
          <CorrectAnswerText>
            <Icon src={CheckmarkIcon} size="medium" />
            <span>Correct Answer</span>
          </CorrectAnswerText>
        )}
      </AnswerContainer>
    ))
  }

  return (
    <div>
      {renderAnswers()}

      <OutlinedBtn onClick={props.addAnswer}>
        <Icon src={PlusIcon} size="small" />
        <span>Add answer</span>
      </OutlinedBtn>
    </div>
  )
}

const AnswerContainer = styled.div`
  margin-bottom: 10px;
`

const CorrectAnswerText = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  width: 100%;

  margin-top: 6px;

  > span {
    padding-right: 50px;

    color: #285f17;

    font-style: italic;
    font-size: 12px;
  }
`
