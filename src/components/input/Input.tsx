type Props = {
  value: string
  onChange: (el: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: Props) => {
  return <input type="text" value={props.value} onChange={props.onChange} />
}
