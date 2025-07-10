import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const authenticUser = () => {
            const token = localStorage.getItem("Token");
            if (token) {
                const decoded = jwtDecode(token);
                setUser(decoded);
                setLoading(false);
            } else {
                setUser(null);
                setLoading(true);
            }
        };
        authenticUser();
    }, []);

    const logOut = () => {
        localStorage.removeItem("Token");
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ user, loading, logOut }}>{children}</AuthContext.Provider>
    )
};
