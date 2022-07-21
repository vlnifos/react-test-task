import { Icon } from "components/icon/Icon"
import { useRef } from "react"
import styled from "styled-components"

type Props = {
  onImageSelect: (img: string) => void
}

export const ImageSelector = (props: Props) => {
  const ref = useRef(null)

  const handleImageSelect = (el: any) => {
    el.preventDefault()

    const { files } = el.target
    const localImageUrl = window.URL.createObjectURL(files[0])

    props.onImageSelect(localImageUrl)
  }

  const handleClick = () => {
    if (ref && ref.current) {
      const current: any = ref.current

      current.click()
    }
  }

  return (
    <span>
      <IconContainer>
        <Icon
          size="medium"
          src="https://file.rendit.io/n/WcTwfyxGNhVZ6EIDUUIW.svg"
          onClick={handleClick}
        />
      </IconContainer>

      <input
        style={{ display: "none" }}
        type="file"
        ref={ref}
        accept="image/gif, image/jpeg, image/png"
        onChange={handleImageSelect}
        alt="answer"
      />
    </span>
  )
}

const IconContainer = styled.span`
  cursor: pointer;

  background: #f5f7fa;

  padding: 2px;

  margin-top: 5px;

  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 70%;
  }
`
