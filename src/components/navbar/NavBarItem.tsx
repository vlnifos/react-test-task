import styled from "styled-components"

export type NavBarItemProps = {
  isActive?: boolean
  disabled?: boolean
  imageSrc: string
  routeName: string
}

export const NavBarItem = (props: NavBarItemProps) => {
  return (
    <MainMenuItem isActive={props.isActive} disabled={props.disabled}>
      <img src={props.imageSrc} alt="navbar_image" />
    </MainMenuItem>
  )
}

type MainMenuItemProps = {
  isActive?: boolean
  disabled?: boolean
}
const MainMenuItem = styled.div<MainMenuItemProps>`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background: ${(props) => (props.isActive ? "#4282aa" : "transparent")};
`
