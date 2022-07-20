import styled from "styled-components"

export const Card = styled.div<{ padding?: boolean; borderColor?: string }>`
  ${(props) =>
    props.padding &&
    `
  padding: 15px;
`}

  border-radius: 5px;

  background: white;

  border: 1px solid ${(props) => props.borderColor || "#d0e8ef"};
`
