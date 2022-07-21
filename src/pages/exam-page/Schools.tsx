import { HorizontalLine } from "components/horizontal-line/HorizontalLine"
import { Icon } from "components/icon/Icon"
import { OutlinedBtn } from "components/button/Button"
import styled from "styled-components"
import { Input } from "components/input/Input"
import { Checkbox } from "components/checkbox/Checkbox"
import ArrowRightIcon from "assets/images/arrowRight.svg"

type Props = {
  schools: string[]
}

export const Schools = (props: Props) => {
  return (
    <div>
      {/* Header */}
      <Head>
        <Icon
          size="large"
          src={"https://file.rendit.io/n/gsQWqT0m4kgZ8ux8A6Eo.png"}
        />

        <Title>Assigned Teachers</Title>
      </Head>

      <HorizontalLine />

      {/* Search input */}
      <Input />

      {/* Schools */}
      <SchoolsContainer>
        <SchoolItem>
          <span>All schools</span>

          <Checkbox checked={false} onChange={() => {}} />
        </SchoolItem>

        {props.schools.map((x) => (
          <SchoolItem key={x}>
            <FlexRow>
              <Icon src={ArrowRightIcon} size="medium" />

              <span>{x}</span>
            </FlexRow>

            <Checkbox checked={false} onChange={() => {}} />
          </SchoolItem>
        ))}
      </SchoolsContainer>

      <OutlinedBtn fullWidth bold>
        Assign To Class
      </OutlinedBtn>
    </div>
  )
}

const Head = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.span`
  margin-left: 10px;
  font-size: 12px;
  color: #4282aa;
`

const SchoolsContainer = styled.div`
  margin-bottom: 10px;
  padding: 0 10px;
`
const FlexRow = styled.div`
  display: flex;
  align-items: center;

  > span {
    margin-left: 8px;
  }
`

const SchoolItem = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  margin: 10px 0;

  color: #777777;

  &:hover {
    opacity: 70%;
  }
`
