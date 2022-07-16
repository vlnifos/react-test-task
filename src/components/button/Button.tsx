import styled from "styled-components"

export const OutlinedBtn = styled.button`
  padding: 10px;
  background: none;
  color: #4282aa;
  &: hover {
    opacity: 70%;
  }

  border-color: #4282aa;
  border-style: solid;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 8px 16px;
  border-width: 1px;
  cursor: pointer;
`
