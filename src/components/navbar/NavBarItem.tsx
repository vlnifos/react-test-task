import styled from "styled-components"

export type NavBarItemProps = {
  isActive?: boolean
  disabled?: boolean
  imageSrc: string
  routeName: string
  badge?: string
}

export const NavBarItem = (props: NavBarItemProps) => {
  return (
    <MainMenuItem isActive={props.isActive} disabled={props.disabled}>
      {props.badge && <Badge>{props.badge}</Badge>}

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
  justify-content: center;
  align-items: center;

  position: relative;

  padding: 10px;

  margin-top: 5px;
  margin-bottom: 5px;

  border-radius: 4px;

  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  background: ${(props) => (props.isActive ? "#4282aa" : "transparent")};
`

const Badge = styled.span`
  position: absolute;
  top: -7px;
  right: -5px;

  padding: 0 5px;

  font-size: 14px;

  background: #e32b99;

  color: white;

  border-radius: 5px;
`
