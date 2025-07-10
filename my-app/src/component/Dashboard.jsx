import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
    const { logOut, user } = useAuth();

    return (
        <div className="dashboard_div">
            <h1> User Dashboard</h1>
            <p>Welcome {user.username}</p>
            <Outlet />
            <Link to={`/dashboard/profile/${user.userId}`}>User profile</Link>
            <button onClick={logOut}>LogOut</button>
        </div>
    );
}

export default Dashboard;