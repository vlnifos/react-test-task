import styled from "styled-components"

type Props = {
  checked: boolean
  onChange: (value: boolean) => void
}

export const Checkbox = (props: Props) => {
  return (
    <label>
      <HiddenCheckbox
        type="checkbox"
        checked={props.checked}
        onChange={(el) => props.onChange(el.target.checked)}
      />
    </label>
  )
}

const HiddenCheckbox = styled.input`
  appearance: none;

  border: 2px solid #777777;
  border-radius: 2px;

  outline: none;

  background: white;

  width: 15px;
  height: 15px;

  cursor: pointer;

  &:checked {
    background: #4282aa55;
    border-color: #4282aa;

    position: relative;

    &::before {
      content: "";
      font-size: 1.5em;
      position: absolute;
      right: 2.5px;
      top: 0px;

      display: inline-block;
      transform: rotate(45deg);
      height: 7px;
      width: 4px;
      margin-left: 60%;
      border-bottom: 2px solid #4282aa;
      border-right: 2px solid #4282aa;
    }
  }
`
