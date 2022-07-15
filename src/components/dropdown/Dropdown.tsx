import { useState } from "react"

type Props = {
  selected: string
  options: string[]
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
              <div key={x} onClick={() => props.handleSelect(x)}>
                {x}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
