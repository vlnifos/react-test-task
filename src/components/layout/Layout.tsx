import { Header } from "components/header/Header"
import { NavBar } from "components/navbar/NavBar"
import { RoutesList } from "components/routes-list/RoutesList"
import styled from "styled-components"

export const Layout = (props: any) => {
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
  min-height: 100vh;

  background: #e3edf2;

  padding-left: 75px;
`
