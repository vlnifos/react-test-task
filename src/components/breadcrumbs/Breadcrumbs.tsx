import { Icon } from "components/icon/Icon"
import styled from "styled-components"

type Props = {
  icon?: string
  texts: string[]
}

export const Breadcrumbs = (props: Props) => {
  return (
    <FlexRow>
      <Icon
        size="small"
        src={props.icon}
        alt=""
        style={{ marginRight: "10px" }}
      />
      {props.texts.map((x, index) => (
        <FlexRow key={x}>
          <span>{x}</span>
          {index !== props.texts.length - 1 && <span>{">"}</span>}
        </FlexRow>
      ))}
    </FlexRow>
  )
}

const FlexRow = styled.div`
  display: flex;
  align-items: center;
`
