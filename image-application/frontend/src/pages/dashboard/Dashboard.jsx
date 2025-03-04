import {useEffect, useState} from "react"
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';
import './dashboard.css'
import Images from "../../components/images/Images.jsx";

const Dashboard = () => {
    const [user, setUsers] = useState("");
    const [data, setData] = useState("");
    const [myImage, setMyImage] = useState([]);
    const navigate = useNavigate();
    const [ownImage, setOwnImage] = useState([]);

    useEffect(() => {
            const fetchData = async () => {
                const user = localStorage.getItem("user");
                const token = localStorage.getItem("token");

                if (!token && !user) {
                    navigate("/login");
                    return;
                }
                setUsers(JSON.parse(user));

                try {
                    fetchDashboardData(token);
                    const response = await axios.get("http://localhost:5000/api/posts");
                    setMyImage(response.data);
                } catch (error) {
                    console.log(error.response);
                }
            }
            fetchData();

            const img = myImage.filter(img => img.user === user.id);
            setOwnImage(img)
    }, [navigate]);



    const fetchDashboardData = async (token) => {
        try {
            const response = await axios.get("http://localhost:5000/api", {
                headers: {Authorization: `Bearer ${token}`}
            });
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);

        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    }





    return (
        <div className="body container-fluid p-0">
            <div className="container pt-4 ">
                <form>
                    <div className="row">
                        <div className="col-sm-3"></div>
                        <div className="col-lg-6">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="p-3 user border border-2 border-info bg-dark">
                                    </div>
                                </div>
                                <input
                                    type="search"
                                    className="form-control text-white border-0 bg-dark p-3"
                                />
                            </div>
                        </div>
                        <div className="col-sm-3"></div>
                    </div>
                </form>
                <h3 className="text-white mt-5">Welcome, <br /> { user.name }</h3>
                <button className="btn btn-dark"><i className="fa fa-plus"></i> <Link className="text-light text-decoration-none" to="/posts">create post</Link></button>
                <button onClick={() => handleLogout()} className="btn m-4 btn-dark"><i className="fa fa-arrow-circle-left"></i> logout </button>
                <button className="btn btn-dark"><i className="fa fa-user"></i> profile</button>
                <div className="row">
                    {myImage.map((image, index) => (
                        <Images key={index} image={ image } />
                    )) }
                </div>
            </div>
        </div>
    )
}

export default Dashboard;