import { useSelector } from "react-redux"
import { RootState } from "./store"
import DashboardRoutes from "./routers/dashboard"
import AuthRoutes from "./routers/auth"

function App() {
  const state = useSelector((state:RootState) => state.token.token)
  return (
    state ? <DashboardRoutes /> : <AuthRoutes/>
  )
}

export default App