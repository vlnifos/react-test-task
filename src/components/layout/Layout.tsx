import { NavBar } from "components/navbar/NavBar"
import { RoutesList } from "components/routes-list/RoutesList"
import styled from "styled-components"

export const Layout = (props: any) => {
  return (
    <Row>
      <NavBar />
      <RoutesList />
    </Row>
  )
}

const Row = styled.div`
  display: flex;
`