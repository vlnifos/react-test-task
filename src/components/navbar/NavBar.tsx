import { Avatar } from "components/avatar/Avatar"
import { useLocation } from "react-router"
import styled from "styled-components"
import { NavBarItem, NavBarItemProps } from "./NavBarItem"

const items: NavBarItemProps[] = [
  {
    routeName: "analytics",
    imageSrc: "https://file.rendit.io/n/buEPcxA6SKcrccfsibRF.svg",

    disabled: true,
  },
  {
    routeName: "book",
    imageSrc: "https://file.rendit.io/n/0FhKrN6xkwtHtF9HLSMf.svg",
    disabled: true,
  },
  {
    routeName: "exams",
    imageSrc: "https://file.rendit.io/n/buEPcxA6SKcrccfsibRF.svg",
  },
]

export const NavBar = (props: any) => {
  // TODO: location name === x.routeName
  const location = useLocation()

  console.log("location", location)

  return (
    <FullScreenHeight>
      <NavBarContainer>
        <FullHeight>
          <FlexColumn>
            {items.map((x) => (
              <NavBarItem
                key={x.routeName}
                imageSrc={x.imageSrc}
                routeName={x.routeName}
                disabled={x.disabled}
                isActive={x.routeName === "exams"}
              />
            ))}
          </FlexColumn>
          <FlexColumn>
            <NavBarItem
              key="documents"
              imageSrc="https://file.rendit.io/n/zUGFVLuBxudyHVlOwTln.svg"
              routeName="settings"
            />

            <NavBarItem
              key="settings"
              imageSrc="https://file.rendit.io/n/9T5tBmDxsCD3Mgb6GXNV.svg"
              routeName="settings"
            />

            <Avatar />
          </FlexColumn>
        </FullHeight>
      </NavBarContainer>
    </FullScreenHeight>
  )
}

// TODO: styles refactor
const NavBarContainer = styled.div`
  border: 1px solid #d0e8ef;
  border-width: 1px 1px 0 0;
  padding: 0 10px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const FullScreenHeight = styled.div`
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
`

const FullHeight = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
