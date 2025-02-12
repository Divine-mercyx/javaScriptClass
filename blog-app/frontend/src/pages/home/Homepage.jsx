import { Link } from 'react-router-dom';
import './homepage.css';

const Homepage =() => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('http://localhost:5000/posts');
            setPosts(response.data);
        };
        fetchPosts();
    }, []);
    return (
        <div className="homepage">
        <Link to="/create">Create a New Post</Link>
            {posts.map((post) => (
                <div className="post" key={post._id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default Homepage;