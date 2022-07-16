import { HorizontalLine } from "components/horizontal-line/HorizontalLine"
import { Icon } from "components/icon/Icon"
import styled from "styled-components"

type Props = {
  rows: {
    img: string
    title: string
    subtitle: string
  }[]
}

export const HeadCard = (props: Props) => {
  return (
    <Container>
      {props.rows.map((x, index) => (
        <FlexColumn>
          <FlexRow>
            <Icon src={x.img} />
            <FlexColumn>
              <Title>{x.title}</Title>
              <SubTitle>{x.subtitle}</SubTitle>
            </FlexColumn>
          </FlexRow>
          {index !== props.rows.length - 1 && (
            <HorizontalLine style={{ margin: "20px 0" }} />
          )}
        </FlexColumn>
      ))}
    </Container>
  )
}

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 4px;
  padding: 16px 24px 16px 16px;
`
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`
const Title = styled.div`
  text-align: center;
  display: flex;
  font-size: 12px;
  line-height: 18px;
  color: #193046;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const SubTitle = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 600;
  color: #4282aa;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`
