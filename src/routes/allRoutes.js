import Login from "pages/Authentication/Login"
import Dashboard from "pages/Dashboard"


const userRoutes = [
  { path: "/", component: Dashboard },
  { path: "/dashboard", component: Dashboard },
]

const authenticationRoutes = [
  { path: "/login", component: Login },
]

export { userRoutes, authenticationRoutes }
