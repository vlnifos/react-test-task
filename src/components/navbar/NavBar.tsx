import { Avatar } from "components/avatar/Avatar"
import styled from "styled-components"
import { routes } from "utils/consts"
import { useCurrentRoute } from "utils/hooks"
import { NavBarItem, NavBarItemProps } from "./NavBarItem"

const items: NavBarItemProps[] = [
  {
    routeName: "home",
    imageSrc: "https://file.rendit.io/n/buEPcxA6SKcrccfsibRF.svg",

    disabled: true,
  },
  {
    routeName: "books",
    imageSrc: "https://file.rendit.io/n/0FhKrN6xkwtHtF9HLSMf.svg",
    disabled: true,
  },
  {
    routeName: "houses",
    imageSrc: "https://file.rendit.io/n/deZIqQk4SrJj6BKPn20m.svg",
    disabled: true,
  },
  {
    routeName: "desk",
    imageSrc: "https://file.rendit.io/n/FDgSCYAWd5y2zN5q7pfx.svg",
    disabled: true,
  },
  {
    routeName: "teachers",
    imageSrc: "https://file.rendit.io/n/X8yXNRlv4GOeIqO3wiQ2.svg",
    disabled: true,
  },
  {
    routeName: "exams",
    imageSrc: "https://file.rendit.io/n/l027ej9nUPR40Rkej4zm.svg",
  },
  {
    routeName: "cart",
    imageSrc: "https://file.rendit.io/n/fIKGQERMfdjX6X3P2nit.svg",
    disabled: true,
  },
]

const paths = {
  [routes.home]: "home",
  [routes.exams]: "exams",
  [routes.examById]: "exams",
  [routes.addQuestion]: "exams",
}

export const NavBar = (props: any) => {
  const route = useCurrentRoute()

  return (
    <NavBarContainer>
      <NavBarContent>
        <FlexColumn>
          {items.map((x) => (
            <NavBarItem
              key={x.routeName}
              imageSrc={x.imageSrc}
              routeName={x.routeName}
              disabled={x.disabled}
              isActive={x.routeName === paths[route.route.path || ""]}
            />
          ))}
        </FlexColumn>
        <FlexColumn>
          <NavBarItem
            key="documents"
            imageSrc="https://file.rendit.io/n/zUGFVLuBxudyHVlOwTln.svg"
            routeName="settings"
            badge="309"
          />

          <NavBarItem
            key="settings"
            imageSrc="https://file.rendit.io/n/9T5tBmDxsCD3Mgb6GXNV.svg"
            routeName="settings"
          />

          <AvatarContainer>
            <Avatar />
          </AvatarContainer>
        </FlexColumn>
      </NavBarContent>
    </NavBarContainer>
  )
}

const NavBarContent = styled.div`
  height: 100%;
  padding-top: 70px;
  padding-bottom: 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const NavBarContainer = styled.div`
  position: fixed;

  border: 1px solid #d0e8ef;
  border-width: 1px 1px 0 0;

  background: white;

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

const AvatarContainer = styled.div`
  margin-top: 10px;
`
