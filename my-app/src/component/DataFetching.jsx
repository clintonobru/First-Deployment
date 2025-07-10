import { useState, useEffect } from "react";
import gift from "../Media/cow.jpg";

function DataFetching() {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
         .then((response) => response.json())
         .then((data) => {
            setPost(data);
            setLoading(false); // Stop Loading when data is fetched
         });
    }, []);

    useEffect(() => {
        console.log(post);
    }, [post]);

    if (loading) return <p>Loading...</p>;

    return (
        <ul>
            <img src={gift} className="gift" alt={`${gift}`} />
            {post.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}

export default DataFetching;
