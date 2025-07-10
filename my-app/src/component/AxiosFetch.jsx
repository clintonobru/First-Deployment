import { useState, useEffect } from "react";
import axios from "axios"
import gift from "../Media/cow.jpg";

function AxiosFetch() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async() => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            setLoading(false)
            setPosts(response.data)
        }
        fetchData()
    }, []);

    useEffect(() => {
        console.log(posts);
    }, [posts]);

    if (loading) return <p>Loading...</p>;

    return (
        <ul>
            <img src={gift} className="gift" alt={`${gift}`} />
            {posts.map((post) => (
                <li key={post.id}>{post.body}</li>
            ))}
        </ul>
    );
}

export default AxiosFetch;
