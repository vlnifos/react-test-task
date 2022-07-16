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
      <Button
        btnType="cancel"
        style={{ marginRight: "15px" }}
        onClick={props.cancelBtn.handler}
      >
        <span>{props.cancelBtn.text || "Cancel"}</span>
      </Button>

      <Button btnType="submit" onClick={props.submitBtn.handler}>
        <span>{props.submitBtn.text || "Submit"}</span>
      </Button>
    </FlexRow>
  )
}

const FlexRow = styled.div`
  display: flex;
`

const Button = styled.button<{ btnType: "submit" | "cancel" }>`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) =>
    props.btnType === "submit" ? "#4282AA" : "transparent"};

  color: ${(props) => (props.btnType === "submit" ? "white" : "#777777")};

  border: none;
  border-radius: 5px;

  padding: 10px 20px;

  cursor: pointer;

  &: hover {
    opacity: 70%;
  }
`
