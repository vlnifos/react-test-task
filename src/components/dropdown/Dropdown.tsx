import { useState } from "react"

type Option = {
  id: string
  title: string
}

type Props = {
  selected: string
  options: Option[]
  handleSelect: (x: string) => void
}

export const Dropdown = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>{props.selected}</div>

      <div>
        {isOpen && (
          <div>
            {props.options.map((x: any) => (
              <div key={x.id} onClick={() => props.handleSelect(x.id)}>
                {x.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
