import { Routes, Route } from "react-router-dom"
import Login from "../pages/login/Login";
import Signup from "../pages/singup/Signup";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={ <Login /> } />
            <Route path="/signup" element={ <Signup /> } />
        </Routes>
    )
}
export default MainRoutes;