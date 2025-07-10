import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import useFormInput from "../hooks/UseFormInput";

function Login() {
    const navigate = useNavigate();
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    

    const handleLogin = async (e) => {
        e.preventDefault();

        console.log(email);

        try {
            const res = await axios.post("https://first-deployment-vuna.onrender.com/user/login", {
                email: email,
                password: password,
            });
            // console.log(res.data);
            localStorage.setItem("Token", res.data.token);
            navigate("/")
        } catch (error) {
            console.log(error);
            alert("This user can't be found")
        }
    };

    return (
        <form className="login_div" onSubmit={handleLogin}>
            <h2>Login</h2>
            <div>
                <input 
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Sign In</button>
        </form>
    );
}

export default Login;



// function SignIn() {
//     const email = useFormInput("");
//     const password = useFormInput("");

//     const handleLogin = async (e) => {
//         e.preventDefault();

//         console.log(email);

//         try {
//             const res = await axios.post("http://localhost:2468/user/login", {
//                 email: email.value,
//                 password: password.value,
//             });
//             console.log(res.data);
//             localStorage.setItem("Token", res.data.token);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (
//         <form onSubmit={handleLogin}>
//             <div>
//                 <lable>Email</lable>
//                 <input type="text" {...email} />
//             </div>
//             <div>
//                 <label>Password</label>
//                 <input type="password" {...password} />
//             </div>
//             <button type="submit">Login</button>
//         </form>
//     );
// }

// export default SignIn;