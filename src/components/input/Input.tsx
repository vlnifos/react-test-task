import { Icon } from "components/icon/Icon"
import styled from "styled-components"
import SearchIcon from "assets/images/search.svg"

type Props = {
  value?: string
  onChange?: (el: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: Props) => {
  return (
    <Container>
      <Icon size="medium" src={SearchIcon} />
      <StyledInput type="text" value={props.value} onChange={props.onChange} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;

  background: white;

  border-radius: 5px;

  padding: 10px;
`

const StyledInput = styled.input`
  border: none;

  background: transparent;

  height: 100%;
  width: 100%;

  &:focus {
    outline: none;
  }
`
