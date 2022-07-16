import styled from "styled-components"

export const Icon = styled.img<{ size: "small" | "normal" }>`
  width: ${(props) => (props.size === "small" ? "12px" : "32px")};
  height: ${(props) => (props.size === "small" ? "12px" : "32px")};
`
