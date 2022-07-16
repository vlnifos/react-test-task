import { HorizontalLine } from "components/horizontal-line/HorizontalLine"
import { Icon } from "components/icon/Icon"
import styled from "styled-components"

type Props = {
  schools: string[]
}

export const Schools = (props: Props) => {
  return (
    <div>
      <Head>
        <Icon src={"https://file.rendit.io/n/gsQWqT0m4kgZ8ux8A6Eo.png"} />
        <Title>Assigned Teachers</Title>
      </Head>

      <HorizontalLine />

      <div>
        {props.schools.map((x) => (
          <div key={x}>{x}</div>
        ))}
      </div>
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
