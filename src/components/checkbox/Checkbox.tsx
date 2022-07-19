type Props = {
  checked: boolean
  onChange: (value: boolean) => void
}

export const Checkbox = (props: Props) => {
  return (
    <label>
      <input type="checkbox" />
      TODO
    </label>
  )
}
