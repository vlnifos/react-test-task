import styled from "styled-components"

type Props = {
  title: string
  onChange: (value: string) => void
}

export const EditableTitle = (props: Props) => {
  return (
    <Input
      value={props.title}
      onChange={(el) => props.onChange(el.target.value)}
    />
  )
}

const Input = styled.input`
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  color: #4282aa;

  &:hover {
    text-decoration: underline;
  }
  &:focus {
    outline: none;
  }
`
