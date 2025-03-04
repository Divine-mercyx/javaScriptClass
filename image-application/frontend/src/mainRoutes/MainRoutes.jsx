import {Route, Routes} from "react-router-dom";
import Signup from "../pages/signup/Signup.jsx";
import Login from "../pages/login/Login.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import Posts from "../pages/posts/Posts.jsx";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/posts" element={<Posts />} />
        </Routes>
    )
}
export default MainRoutes;