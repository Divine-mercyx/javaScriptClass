import { useEffect } from "react";
import MainRoutes from "./mainRoutes/MainRoutes.jsx";
import { useNavigate } from "react-router-dom";

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (user && token) {
      navigate("/dashboard");
      return;
    }
    else {
      navigate("/login");
      return;
    }
  }, []);

  return (
    <>
      <MainRoutes />
    </>
  )
}

export default App
