import styled from "styled-components"

const sizes = {
  small: "12px",
  medium: "20px",
  large: "32px",
}

export const Icon = styled.img<{ size: "small" | "medium" | "large" }>`
  width: ${(props) => sizes[props.size]};
  height: ${(props) => sizes[props.size]};
`
