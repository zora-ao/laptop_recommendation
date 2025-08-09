import { Outlet } from "react-router-dom"
import Navbar from "../Header/Navbar"

const MainLayout = () => {

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default MainLayout
