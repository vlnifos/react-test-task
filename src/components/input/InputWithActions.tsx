import styled from "styled-components"

type Props = {
  value: string
  placeholder?: string
  solo?: boolean
  color?: string
  fullWidth?: boolean
  actionLeft?: React.ReactElement
  actionRight?: React.ReactElement
  onChange: (el: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const InputWithActions = (props: Props) => {
  const handleChange = (el: React.ChangeEvent<HTMLTextAreaElement>) => {
    el.target.style.height = "20px"
    el.target.style.height = `${el.target.scrollHeight}px`

    props.onChange(el)
  }

  return (
    <Container solo={props.solo || false}>
      <FlexRow>
        {/* Left action btn */}
        {props.actionLeft && <ActionBtn>{props.actionLeft}</ActionBtn>}

        {/* Input */}
        <StyledInput
          placeholder={props.placeholder}
          value={props.value}
          color={props.color || "#777777"}
          fullWidth={props.fullWidth || false}
          onChange={handleChange}
        />
      </FlexRow>

      {/* Right action btn */}
      {props.actionRight && <ActionBtn>{props.actionRight}</ActionBtn>}
    </Container>
  )
}

const Container = styled.div<{ solo: boolean }>`
  background: white;

  border-radius: 5px;
  border: 1px solid #d0e8ef;

  display: flex;
  justify-content: space-between;
  align-items: start;

  padding: 10px;
  padding-bottom: 15px;

  ${(props) =>
    props.solo &&
    `
      border: none;
      background: transparent;
  `}
`

const StyledInput = styled.textarea<{ fullWidth: boolean; color: string }>`
  background: transparent;
  color: ${(props) => props.color};

  height: 15px;

  resize: none;

  overflow: hidden;

  &::placeholder {
    font-style: italic;
    color: #777777;
  }

  border: none;

  word-break: break-word;

  margin-top: 10px;
  margin-left: 12px;

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.fullWidth &&
    `
      width: 80%;
  `}
`

const FlexRow = styled.div`
  display: flex;
  align-items: start;
  width: 100%;

  margin-left: 6px;
`

const ActionBtn = styled.div`
  margin-top: 5px;
`
