import { useState } from "react";
import axios from 'axios';
import './signup.css';
import {useNavigate} from "react-router-dom";

const Signup = () => {
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async (e) => {

        e.preventDefault();
        setError("");

        try {
            const response = await axios.post('http://localhost:5000/api/users/signup', { name: name, email: email, password: password })
            if (response.data.message === "User created successfully") {
                alert("account created successfully");
                navigate("/login");
            }
        }
        catch(error) {
            setError(
                error.response?.data?.message || "Failed to create account. Please try again."
            );
        }
    };

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
                        <p className='text-white bigger-text'>Create</p>
                        <p className='text-white bigger-text'>new account</p>
                        <form onSubmit={handleSubmit}>
                            <label className='text-white' htmlFor='username'>Username</label>
                            <br/>
                            <input
                                id='username'
                                value={name}
                                type='text'
                                onChange={(e) => setName(e.target.value)}
                                className='form-control mb-4 bg-dark border-0 p-4 text-light'
                                required
                            />

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


                            <label htmlFor='checkbox' className='text-white'>
                                <input
                                    type='checkbox'
                                    id='checkbox'
                                    required/> By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may
                                receive SMS notifications from us and can opt out at any time.</label>

                            <button id='submit' className='btn container btn-primary mt-4'>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>

        </div>
    )
};

export default Signup