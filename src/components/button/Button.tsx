import styled from "styled-components"

export const IconBtn = styled.button`
  background: #f5f7fa;

  padding: 4px;

  cursor: pointer;

  border-radius: 5px;

  border: none;

  &:hover {
    opacity: 70%;
  }
`

export const OutlinedBtn = styled.button<{
  bold?: boolean
  fullWidth?: boolean
}>`
  padding: ${(props) => (props.fullWidth ? "12px 0" : "8px 16px")};

  background: none;

  color: #4282aa;

  border-color: #4282aa;
  border-style: solid;
  border-radius: 4px;
  border-width: 1px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 8px;
  cursor: pointer;
  &: hover {
    opacity: 70%;
  }

  font-weight: ${(props) => (props.bold ? "600" : "400")};

  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
`

export const SoloBtn = styled.button`
  color: #4282aa;
  border: none;
  background: transparent;
  cursor: pointer;
`
