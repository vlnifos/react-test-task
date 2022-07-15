import { useAppSelector } from "app/hooks"
import { selectQuestion } from "features/add-question/addQuestionSlice"

export const AddQuestion = (props: any) => {
  const question = useAppSelector(selectQuestion)

  return (
    <div>
      <span>{question.text}</span>
      <span>{question.type}</span>
    </div>
  )
}
