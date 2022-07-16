import { Input } from "components/input/Input"
import styled from "styled-components"
import { MatchingPairs } from "utils/types"

type Props = {
  pairs: MatchingPairs[]
  onChange: (id: number, value: string) => void
  addPair: () => void
}

export const Matching = (props: Props) => {
  const renderPairs = () => {
    return props.pairs.map((x) => (
      <div key={x.id}>
        <Input
          value={x.question.text}
          onChange={(el) => props.onChange(x.id, el.target.value)}
        />

        <Input
          value={x.answer.text}
          onChange={(el) => props.onChange(x.id, el.target.value)}
        />
      </div>
    ))
  }

  return (
    <div>
      <FlexRowJustifyBetween>
        <span>Question</span>
        <span>Correct Answer</span>
      </FlexRowJustifyBetween>

      <div>{renderPairs()}</div>

      <button onClick={props.addPair}>Add pair</button>
    </div>
  )
}

const FlexRowJustifyBetween = styled.div`
  display: flex;
  justify-content: space-between;
`
