import axios from "axios";
import {useState} from "react";
import './posts.css';
import {useNavigate} from "react-router-dom";

const Posts = () => {
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const handlePost = async (e) => {
        e.preventDefault();
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            const response = await axios.get('http://localhost:5000/api/cloud-signature');
            const { signature, timestamp, api_key } = response.data;

            if (!signature || !timestamp || !api_key) {
                throw new Error("Invalid signature");
            }

            if (!image) {
                alert('Please select an image to upload.');
                return;
            }

            const formData = new FormData();
            formData.append('file', image);
            formData.append('upload_preset', 'ml_default');
            formData.append('api_key', api_key);
            formData.append('timestamp', timestamp);
            formData.append('signature', signature);
            console.log("hello")
            const cloudinaryResponse = await axios.post('https://api.cloudinary.com/v1_1/dd135qkma/image/upload', formData);
            const imageUrl = cloudinaryResponse.data.secure_url;
            console.log(imageUrl);
            const postResponse = await axios.post('http://localhost:5000/api/posts', { imageUrl, user: user.id });
            alert("post created successfully: " + postResponse.data);
            setImage(null);
            navigate("/dashboard")
        } catch (error) {
            console.error(error);
        }
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }



    return (
        <div className="container-fluid body">
            <div className="container">
                <br /><br />
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <br/><br/>
                        <br/><br/>
                        <h3 className="text-white mb-4">Upload photo</h3>
                        <div className="input-group">
                            <form onSubmit={handlePost}>
                                <input
                                    type="file"
                                    onChange={handleImageChange}
                                    className="form-control container"
                                    accept="image/*"
                                    required
                                />
                                <button type="submit" className="btn mt-4 container btn-info">post</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </div>
    )
}
export default Posts;