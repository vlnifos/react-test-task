import styled from "styled-components"

export const Avatar = () => {
  return <Img src="https://ui-avatars.com/api/?background=random" alt="" />
}

const Img = styled.img`
  overflow: hidden;

  width: 45px;
  height: 45px;

  border-radius: 50%;
  border: 2px solid #b3b8c2;
`
