import { HorizontalLine } from "components/horizontal-line/HorizontalLine"
import { Icon } from "components/icon/Icon"
import { OutlinedBtn } from "components/button/Button"
import styled from "styled-components"
import { Input } from "components/input/Input"

type Props = {
  schools: string[]
}

export const Schools = (props: Props) => {
  return (
    <div>
      <Head>
        <Icon
          size="large"
          src={"https://file.rendit.io/n/gsQWqT0m4kgZ8ux8A6Eo.png"}
        />
        <Title>Assigned Teachers</Title>
      </Head>

      <HorizontalLine />

      <Input />

      <SchoolsContainer>
        {props.schools.map((x) => (
          <SchoolItem key={x}>
            <span>{x}</span>

            <input type="checkbox" defaultChecked={true} disabled />
          </SchoolItem>
        ))}
      </SchoolsContainer>

      <OutlinedBtn style={{ width: "100%" }}>Assign To Class</OutlinedBtn>
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
