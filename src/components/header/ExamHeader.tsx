import { HeaderBtns } from "./HeaderBtns"

type Props = {}

export const ExamHeader = (props: Props) => {
  return (
    <div>
      <HeaderBtns
        cancelBtn={{ text: "Delete Exam", handler: () => {} }}
        submitBtn={{ text: "Save Exam", handler: () => {} }}
      />
    </div>
  )
}
