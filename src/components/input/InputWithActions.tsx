import styled from "styled-components"

type Props = {
  value: string
  placeholder?: string
  actionLeft?: React.ReactElement
  actionRight?: React.ReactElement
  onChange: (el: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputWithActions = (props: Props) => {
  return (
    <Container>
      <FlexRow>
        {props.actionLeft && <div>{props.actionLeft}</div>}

        <StyledInput
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      </FlexRow>

      {props.actionRight && <div>{props.actionRight}</div>}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  background: white;

  border-radius: 5px;
  border: 1px solid #d0e8ef;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
`

const StyledInput = styled.input`
  background: transparent;
  color: #777777;

  border: none;

  &:focus {
    outline: none;
  }
`

const FlexRow = styled.div`
  display: flex;
  align-items: center;
`
