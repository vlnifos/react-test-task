import { useAppDispatch, useAppSelector } from "app/hooks"
import { OutlinedBtn } from "components/button/Button"
import { Dropdown } from "components/dropdown/Dropdown"
import { Icon } from "components/icon/Icon"
import { Img } from "components/Img/Img"
import { InputWithActions } from "components/input/InputWithActions"
import {
  addAnswer,
  selectQuestion,
  setQuestionData,
  setAnswerData,
} from "features/add-question/addQuestionSlice"
import styled from "styled-components"
import { humanReadableQuestionType } from "utils/consts"
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
      <Img
        key={x}
        src={x}
        action={{
          handler: () => handleRemoveImage(x),
        }}
      />
    ))
  }

  const handleAddMatchingPair = () => {}

  return (
    <AddQuestionContainer>
      {/* Question type */}
      <Section>
        <SectionTitle>1. Question Type</SectionTitle>
        <Dropdown
          selected={humanReadableQuestionType[question.type]}
          options={[
            {
              id: "multiple_choice",
              title: humanReadableQuestionType["multiple_choice"],
            },
            { id: "matching", title: humanReadableQuestionType["matching"] },
          ]}
          handleSelect={(x) => handleChange("type", x)}
        />
      </Section>

      {/* Question */}
      <Section>
        <SectionTitle>2. Question</SectionTitle>

        <InputWithActions
          placeholder="Question Text..."
          value={question.text}
          actionLeft={
            <Icon
              size="large"
              src="https://file.rendit.io/n/rnPoD4SZFti2FUFynQA8.png"
            />
          }
          actionRight={
            <ImageSelector onImageSelect={(img) => handleImageSelect(img)} />
          }
          onChange={(val) => handleChange("text", val.target.value)}
        />

        {renderQuestionImages()}
      </Section>

      {/* Answers */}
      <Section>
        <SectionTitle>
          3. Answers
          <SectionTitleThin>
            {" "}
            (please tick the correct answers)
          </SectionTitleThin>
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

      {/* Points */}
      <Section>
        <SectionTitle>4. Points</SectionTitle>
        <Text>{question.points} point for the right answer</Text>
        <OutlinedBtn>Change</OutlinedBtn>
      </Section>

      {/* Comments */}
      <Section>
        <SectionTitle>5. Comments</SectionTitle>
        <InputWithActions
          placeholder="Teacher comment..."
          value={question.comments}
          actionLeft={
            <Icon
              size="large"
              src="https://file.rendit.io/n/YBiIQ6ifa5ZC5rXNXWCy.png"
            />
          }
          onChange={(val) => handleChange("comments", val.target.value)}
        />
      </Section>
    </AddQuestionContainer>
  )
}

const AddQuestionContainer = styled.div`
  width: 50%;

  margin: 0 auto;
`
const SectionTitle = styled.div`
  color: #777777;

  margin-top: 15px;
  margin-bottom: 5px;
`
const SectionTitleThin = styled.span`
  color: #777777;

  font-size: 14px;
`
const Text = styled.span`
  color: #777777;
`
const Section = styled.div``
