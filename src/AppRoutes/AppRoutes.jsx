import { Routes, Route } from 'react-router-dom'
import Login from '../components/Login/Login'
import LoginRoute from "../AppRoutes/LoginRoute"

const AppRoutes = () => {

  return (
    <Routes>
      <Route element={<LoginRoute />}>
        <Route path="/" element={<Login />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes;