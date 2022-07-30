import styled from "styled-components"

type Props = {
  id: React.ReactElement
  type: React.ReactElement
  standart: React.ReactElement
  actions: React.ReactElement
  color?: string
  fullWidth?: boolean
}

export const QuestionItemHeader = (props: Props) => {
  return (
    <Container fullWidth={props.fullWidth} color={props.color}>
      <LeftContainer>
        <Id>{props.id}</Id>
        <Type>{props.type}</Type>
      </LeftContainer>

      <RightContainer>
        <div>{props.standart}</div>
        <Actions>{props.actions}</Actions>
      </RightContainer>
    </Container>
  )
}

const Container = styled.div<{ fullWidth?: boolean; color?: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 12px;

  span {
    color: ${(props) => props.color || "#727e83"};
  }

  ${(props) =>
    props.fullWidth &&
    `
    width: calc(100% + 30px);
    margin-left: -15px;
  `}
`

const LeftContainer = styled(Container)`
  width: 70%;
`

const RightContainer = styled(Container)`
  width: 30%;
`

const Id = styled.div`
  width: 10%;
  text-align: center;
`

const Type = styled.div`
  width: 90%;
`

const Actions = styled.div`
  width: 30%;
  text-align: center;
`
