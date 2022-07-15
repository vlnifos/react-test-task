import { Header } from "components/header/Header"
import { NavBar } from "components/navbar/NavBar"
import { RoutesList } from "components/routes-list/RoutesList"
import { useLocation } from "react-router"
import styled from "styled-components"

export const Layout = (props: any) => {
  const location = useLocation()

  console.log("locat", location)
  return (
    <Row>
      <NavBar />
      <MainPage>
        <Header />
        <RoutesList />
      </MainPage>
    </Row>
  )
}

const Row = styled.div`
  display: flex;
`
const MainPage = styled.div`
  width: 100%;
  background: #e3edf2;
`
