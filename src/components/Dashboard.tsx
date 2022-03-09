import { Route, Routes } from "react-router-dom"
import { privateDir } from "../routes/routes"
import {Navbar} from "./navbar"

const Dashboard = () => {
    <>
        <Navbar>
            <Navbar.Image></Navbar.Image>
        </Navbar>

        <Routes>
            {privateDir.map((privateRoute) => {
                return <Route {...privateRoute} key={privateRoute.path}/>
            })}
        </Routes>
    </>
}

export default Dashboard