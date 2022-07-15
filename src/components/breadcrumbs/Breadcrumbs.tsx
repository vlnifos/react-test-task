import styled from "styled-components"

type Props = {
  imageSrc?: string
  texts: string[]
}

export const Breadcrumbs = (props: Props) => {
  return (
    <FlexRow>
      <img src={props.imageSrc} alt="" />
      {props.texts.map((x, index) => (
        <FlexRow>
          {x}
          {index !== props.texts.length - 1 && <span>{">"}</span>}
        </FlexRow>
      ))}
    </FlexRow>
  )
}

const FlexRow = styled.div`
  display: flex;
`
