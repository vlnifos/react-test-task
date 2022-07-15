import styled from "styled-components"

type Props = {
  cancelBtn: {
    text: string
    handler: () => void
  }
  submitBtn: {
    text: string
    handler: () => void
  }
}

export const HeaderBtns = (props: Props) => {
  return (
    <FlexRow>
      <button onClick={props.cancelBtn.handler}>
        {props.cancelBtn.text || "Cancel"}
      </button>

      <button onClick={props.submitBtn.handler}>
        {props.submitBtn.text || "Submit"}
      </button>
    </FlexRow>
  )
}

const FlexRow = styled.div`
  display: flex;
`
