import { Outlet } from "react-router-dom"
import { Navbar } from "../newComponents/Navbar"

export const MainLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
