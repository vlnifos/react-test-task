import { ImageSelector } from "./ImageSelector"

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
      <img
        src={el}
        alt=""
        key={el}
        onClick={() => handleImageRemove(item, el)}
      />
    ))

  const renderAnswers = () => {
    return props.answers.map((x) => (
      <div key={x.id}>
        <div>
          <input
            type="checkbox"
            checked={x.isCorrectAnswer}
            onChange={(el) =>
              handleChange(x, "isCorrectAnswer", el.target.checked)
            }
          />

          <input
            type="text"
            value={x.text}
            onChange={(el) => handleChange(x, "text", el.target.value)}
          />

          <ImageSelector onImageSelect={(img) => handleImageSelect(x, img)} />
          {/* <input
            type="file"
            accept="image/gif, image/jpeg, image/png"
            onChange={(el) => handleImageSelect(x, el)}
            alt="answer"
          /> */}
        </div>

        {renderImages(x)}
      </div>
    ))
  }

  return (
    <div>
      {renderAnswers()}
      <button onClick={props.addAnswer}>Add answer</button>
    </div>
  )
}
