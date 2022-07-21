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
          {/* Title */}
          <span>{x}</span>

          {/* Divider */}
          {index !== props.texts.length - 1 && <Divider>{">"}</Divider>}
        </FlexRow>
      ))}
    </FlexRow>
  )
}

const FlexRow = styled.div`
  display: flex;
  align-items: center;

  color: #727783;
`

const Divider = styled.span`
  margin: 0 8px;
`
