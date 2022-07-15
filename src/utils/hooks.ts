import { matchRoutes, useLocation } from "react-router"
import { routes } from "./consts"

export const useCurrentRoute = () => {
  const location = useLocation()

  const rts = Object.values(routes).map((x) => ({ path: x }))
  const [route] = matchRoutes(rts, location) || []

  return route
}
