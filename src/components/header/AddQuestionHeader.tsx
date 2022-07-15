import { useAppDispatch, useAppSelector } from "app/hooks"
import {
  clearQuestionData,
  selectQuestion,
} from "features/add-question/addQuestionSlice"
import { addQuestion } from "features/exam/examSlice"
import { useNavigate } from "react-router"
import { HeaderBtns } from "./HeaderBtns"

type Props = {}

export const AddQuestionHeader = (props: Props) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const question = useAppSelector(selectQuestion)

  const handleRemoveCurrentQuestion = () => {
    dispatch(clearQuestionData())
    navigate(-1)
  }

  const handleSaveCurrentQuestion = () => {
    dispatch(addQuestion(question))
    navigate(-1)
    dispatch(clearQuestionData())
  }

  return (
    <div>
      <HeaderBtns
        cancelBtn={{
          text: "Delete Question",
          handler: handleRemoveCurrentQuestion,
        }}
        submitBtn={{
          text: "Save Question",
          handler: handleSaveCurrentQuestion,
        }}
      />
    </div>
  )
}
