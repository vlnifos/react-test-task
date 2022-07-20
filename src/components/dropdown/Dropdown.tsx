import { Icon } from "components/icon/Icon"
import { useState } from "react"
import styled from "styled-components"
import ArrowDropdown from "assets/images/arrowDropdown.svg"

type Option = {
  id: string
  title: string
  disabled?: boolean
}

type Props = {
  selected: string
  options: Option[]
  handleSelect: (x: string) => void
}

export const Dropdown = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container onClick={() => setIsOpen(!isOpen)}>
      <FlexRowSpaceBetween>
        <FlexRow>
          <Icon
            size="large"
            src="https://file.rendit.io/n/LYeH944F8KLfmOEDbFSY.png"
          />
          <SelectedOption>{props.selected}</SelectedOption>
        </FlexRow>
        <Icon src={ArrowDropdown} size="medium" />
      </FlexRowSpaceBetween>

      <div>
        {isOpen && (
          <div>
            {props.options.map((x: any) => (
              <StyledOption
                key={x.id}
                disabled={x.disabled}
                onClick={() => x.disabled === false && props.handleSelect(x.id)}
              >
                {x.title}
              </StyledOption>
            ))}
          </div>
        )}
      </div>
    </Container>
  )
}

const Container = styled.div`
  border-radius: 5px;
  border: 1px solid #d0e8ef;

  padding: 16px;
  padding-right: 14px;

  background: white;

  cursor: pointer;
`
const FlexRow = styled.div`
  display: flex;
  align-items: center;
`
const FlexRowSpaceBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const SelectedOption = styled.div`
  margin-left: 12px;

  color: #4282aa;
`
const StyledOption = styled.div<{ disabled: boolean }>`
  color: ${(props) => (props.disabled ? "#777777" : "#4282aa")};
`
