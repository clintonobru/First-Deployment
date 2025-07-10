import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Profile() {
    const { id } = useParams();
    const [userInfo, setUserInfo] = useState({});
    console.log(userInfo);

    useEffect(() => {
        const getUserInfo = async () => {
            const res = await axios.get(`https://first-deployment-vuna.onrender.com/user/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("Token")}`,
                },
            });
            console.log(res);
            setUserInfo(res.data);
        };
        getUserInfo();
    }, [id]);

    return (
        <>
            <div className="profile_div">Profile Secion</div>
            <p>Username: {userInfo.name}</p>
            <p>Email: {userInfo.email}</p>
            <p>_id: {userInfo._id}</p>
            <p>User Role: {userInfo.role}</p>
        </>
    );
}

export default Profile;