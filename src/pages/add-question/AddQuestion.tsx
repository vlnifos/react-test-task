import { useAppDispatch, useAppSelector } from "app/hooks"
import { OutlinedBtn } from "components/button/Button"
import { Card } from "components/card/Card"
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
import { ImagesContainer } from "./ImagesContainer"
import { ImageSelector } from "./ImageSelector"
import { Matching } from "./Matching"
import { MultiChoice } from "./MultiChoice"

import OnePointIcon from "assets/images/point.svg"
import PencilIcon from "assets/images/pencil.svg"

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
      <SectionTitle>1. Question Type</SectionTitle>
      <Section>
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
      <SectionTitle>2. Question</SectionTitle>
      <Section>
        <Card>
          <InputWithActions
            placeholder="Question Text..."
            value={question.text}
            color={"#4282AA"}
            solo
            fullWidth
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

          {question.images.length > 0 && (
            <ImagesContainer>{renderQuestionImages()}</ImagesContainer>
          )}
        </Card>
      </Section>

      {/* Answers */}
      <SectionTitle>
        3. Answers
        <SectionTitleThin> (please tick the correct answers)</SectionTitleThin>
      </SectionTitle>
      <Section>
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
      <SectionTitle>4. Points</SectionTitle>
      <Section>
        <FlexRow>
          <Icon src={OnePointIcon} size="large" />
          <Text>point for the right answer</Text>
        </FlexRow>

        <OutlinedBtn>
          <Icon src={PencilIcon} size="small" />
          <span>Change</span>
        </OutlinedBtn>
      </Section>

      {/* Comments */}
      <SectionTitle>5. Comments</SectionTitle>
      <Section>
        <InputWithActions
          placeholder="Teacher comment..."
          value={question.comments}
          fullWidth
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

  margin-bottom: 20px;
`
const SectionTitle = styled.div`
  color: #777777;

  margin-top: 24px;
  margin-bottom: 12px;
`
const SectionTitleThin = styled.span`
  color: #777777;

  font-size: 14px;
`
const Text = styled.span`
  color: #777777;
`

const Section = styled.div``
const FlexRow = styled.div`
  display: flex;
  align-items: center;

  margin: 12px 0;

  > span {
    margin-left: 8px;
  }
`
