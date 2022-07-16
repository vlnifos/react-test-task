import styled from "styled-components"

export const OutlinedBtn = styled.button`
  padding: 8px 16px;

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
`

export const SoloBtn = styled.button`
  color: #4282aa;
  border: none;
  background: transparent;
  cursor: pointer;
`
