import { Icon } from "components/icon/Icon"
import styled from "styled-components"

type Props = {
  src: string
  color?: string
  action?: {
    icon?: string
    handler: () => void
  }

  style?: any
}

export const Img = (props: Props) => {
  return (
    <ImgContainer>
      {/* Image to display */}
      <StyledImg src={props.src} style={props.style} />

      {/* Action btn */}
      {props.action && (
        <ActionBtn onClick={props.action.handler}>
          <Icon
            size={"medium"}
            color={props.color}
            src={
              props.action.icon ||
              "https://file.rendit.io/n/Tv1iXP4lX3eWGWQGSuX3.png"
            }
          />
        </ActionBtn>
      )}
    </ImgContainer>
  )
}

const ImgContainer = styled.div`
  position: relative;
  display: inline-block;

  width: 160px;
  height: 160px;
`

const StyledImg = styled.img`
  width: 160px;
  height: 160px;

  border: 1px solid #d0e8ef;
  border-radius: 5px;

  object-fit: cover;

  svg {
    path {
      fill: blue;
    }
  }
`
const ActionBtn = styled.span`
  position: absolute;
  top: 1px;
  right: 0px;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  background: #f5f7fa;

  border-radius: 5px;

  &:hover {
    background: #d8dadd;
  }
`
