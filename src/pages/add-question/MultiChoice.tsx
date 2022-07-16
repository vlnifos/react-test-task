import { Img } from "components/Img/Img"
import { InputWithActions } from "components/input/InputWithActions"
import { OutlinedBtn } from "components/button/Button"
import { ImageSelector } from "./ImageSelector"
import styled from "styled-components"

type Props = {
  answers: any[]
  onChange: (id: number, payload: any) => void
  addAnswer: () => void
}

export const MultiChoice = (props: Props) => {
  const handleChange = (item: any, type: string, value: any) => {
    console.log("handleChange", item, type, value)
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
        alt=""
        key={el}
        onClick={() => handleImageRemove(item, el)}
      />
    ))

  const renderAnswers = () => {
    return props.answers.map((x) => (
      <AnswerContainer key={x.id}>
        <InputWithActions
          placeholder="Answer Text..."
          value={x.text}
          onChange={(el) => handleChange(x, "text", el.target.value)}
          actionLeft={
            <input
              type="checkbox"
              checked={x.isCorrectAnswer}
              onChange={(el) =>
                handleChange(x, "isCorrectAnswer", el.target.checked)
              }
            />
          }
          actionRight={
            <ImageSelector onImageSelect={(img) => handleImageSelect(x, img)} />
          }
        />

        {renderImages(x)}
      </AnswerContainer>
    ))
  }

  return (
    <div>
      {renderAnswers()}
      <OutlinedBtn onClick={props.addAnswer}>Add answer</OutlinedBtn>
    </div>
  )
}

const AnswerContainer = styled.div`
  margin-bottom: 10px;
`
