import './image.css';
import axios from 'axios';


const Images = (props) => {
    const aUser = JSON.parse(localStorage.getItem('user'));
    // eslint-disable-next-line react/prop-types
    const { image } = props;

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:5000/api/posts/' + id);
        } catch(error) {
            console.error(error);
        }
    }

    const imageStyle = {
        backgroundImage: `url(${image.image})`,
        backgroundSize: 'cover',
        height: '400px'
    }

    return (
        <div className="col-lg-3 mb-4 images">
            <div style={ imageStyle } className="container shadow  img">
                { image.user === aUser.id ?
                    (<button onClick={() => handleDelete( image.user )} className="btn mt-1 btn-light btn-sm">delete</button>)
                    :
                    (<></>)
                }
                <i className="fa fa-heart fa-lg m-2 text-danger"></i>
            </div>

        </div>
    )
}

export default Images;