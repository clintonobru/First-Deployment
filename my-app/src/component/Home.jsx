// import ThemedButton from "../context/ThemedButton";
import Form from "./Form";
import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <div className="home_div">
                <h1 className="home_h1">Welcome To Home Page</h1>
                <Form />
            </div>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
        </>
    );
}

export default Home;