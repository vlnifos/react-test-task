import { useAppDispatch, useAppSelector } from "app/hooks"
import { Dropdown } from "components/dropdown/Dropdown"
import {
  addAnswer,
  selectQuestion,
  setQuestionData,
  setAnswerData,
} from "features/add-question/addQuestionSlice"
import styled from "styled-components"
import { ImageSelector } from "./ImageSelector"
import { Matching } from "./Matching"
import { MultiChoice } from "./MultiChoice"

export const AddQuestion = (props: any) => {
  const question = useAppSelector(selectQuestion)
  const dispatch = useAppDispatch()

  const handleChange = (
    type: "text" | "points" | "comments" | "type" | "images",
    value: any
  ) => dispatch(setQuestionData({ data: value as never, type }))

  const handleAddAnswer = () => dispatch(addAnswer())

  const handleAnswerChange = (id: number, item: any) =>
    dispatch(setAnswerData({ id, item }))

  const handleImageSelect = (img: string) => {
    const images = [...question.images]
    images.push(img)

    handleChange("images", images)
  }

  const handleRemoveImage = (img: string) => {
    const images = [...question.images]

    const index = images.findIndex((x) => x === img)

    images.splice(index, 1)

    handleChange("images", images)
  }

  const renderQuestionImages = () => {
    return question.images.map((x) => (
      <img key={x} src={x} alt="img" onClick={() => handleRemoveImage(x)} />
    ))
  }

  const handleAddMatchingPair = () => {}

  return (
    <AddQuestionCOntainer>
      <Section>
        <SectionTitle>1. Question Type</SectionTitle>
        <Dropdown
          selected={question.type}
          options={["multiple_choice", "matching"]}
          handleSelect={(x) => handleChange("type", x)}
        />
      </Section>
      <Section>
        <SectionTitle>2. Question</SectionTitle>
        <input
          type="text"
          value={question.text}
          onChange={(val) => handleChange("text", val.target.value)}
        />
        <ImageSelector onImageSelect={(img) => handleImageSelect(img)} />

        {renderQuestionImages()}
      </Section>
      <Section>
        <SectionTitle>
          3. Answers
          <SectionTitleThin>(please tick the correct answers)</SectionTitleThin>
        </SectionTitle>

        {question.type === "multiple_choice" ? (
          <MultiChoice
            addAnswer={handleAddAnswer}
            answers={question.answers}
            onChange={handleAnswerChange}
          />
        ) : (
          <Matching
            pairs={(question as any).answers}
            onChange={() => {}}
            addPair={handleAddMatchingPair}
          />
        )}
      </Section>
      <Section>
        <SectionTitle>4. Points</SectionTitle>
        Points
        <button>Change</button>
      </Section>
      <Section>
        <SectionTitle>5. Comments</SectionTitle>
        <input
          type="text"
          value={question.comments}
          onChange={(val) => handleChange("comments", val.target.value)}
        />
      </Section>
    </AddQuestionCOntainer>
  )
}

const AddQuestionCOntainer = styled.div`
  width: 50%;
  margin: 0 auto;
`
const SectionTitle = styled.div`
  color: #777777;
`
const SectionTitleThin = styled.span`
  color: #777777;
`
const Section = styled.div``
