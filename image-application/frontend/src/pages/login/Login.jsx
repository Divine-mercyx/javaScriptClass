import axios from 'axios';
import {useState} from "react";
import './login.css'
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const response = await axios.post('http://localhost:5000/api/users/login', { email: email, password: password })

            localStorage.setItem("token", response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            navigate("/dashboard");

        } catch (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    setError("User not found");
                }
                else if (error.response.status === 400) {
                    setError("Invalid credentials");
                }
                else {
                    setError("Login failed")
                }
            }
            else {
                setError("Network Error, please try again.");
            }
        }
    }

    return (
        <div className="body container-fluid">
            <div className='container'>
                <h3 className='text-white pt-4'><b>WeWrite</b></h3>
                {error && <div className="alert alert-danger">{error}</div>}
                <br/><br/><br/><br/><br/><br/>
                <div className="row">
                    <div className="col-sm-6">
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <p className="side-text text-white">Join For Free</p>
                        <p className='text-white-50 bigger-text'>A world of organization</p>
                        <p className='text-white-50 bigger-text'><b className='text-priary'>awaits</b>, claim your space
                        </p>
                        <p className='text-white-50 bigger-text'>Sign up in seconds</p>
                        <p className='text-white-50 mt-4'>divine stuff is a powerful, user-friendly platform designed to
                            help you create, manage, and share your stories with the world. Whether youre a seasoned
                            writer or just starting out.</p>
                        <button id='left-btn' className='btn btn-outline-light mt-4'>Learn More</button>
                        <button id="right-btn" className='btn btn-primary mt-4'>Follow us</button>
                    </div>
                    <div className='col-sm-2'></div>
                    <div className='col-sm-4'>
                        <br/><br/><br/><br/><br/><br/><br/><br/>
                        <p className='text-white bigger-text'>Create</p>
                        <p className='text-white bigger-text'>new account</p>
                        <form onSubmit={handleSubmit}>

                            <label className='text-white' htmlFor='email'>Email</label>
                            <br/>
                            <input
                                id='email'
                                value={email}
                                type='email'
                                onChange={(e) => setEmail(e.target.value)}
                                className='form-control mb-4 bg-dark border-0 p-4 text-light'
                                required
                            />

                            <label className='text-white' htmlFor='password'>Password</label>
                            <br/>
                            <input
                                id='password'
                                value={password}
                                type='password'
                                onChange={(e) => setPassword(e.target.value)}
                                className='form-control bg-dark mb-4 border-0 p-4 text-light'
                                required
                            />
                            <Link className="text-decoration-none" to="/signup">don't have an account ? signup </Link>

                            <button id='submit' className='btn container btn-primary mt-4'>Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}
export default Login