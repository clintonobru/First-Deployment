import React from "react";
import useFormInput from "../hooks/UseFormInput";


function Form() {
    const username = useFormInput("");
    const email = useFormInput("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Usernmae: ${username.value}, Email: ${email.value}`);
    };

    return (
        <form className="homeForm" onSubmit={handleSubmit}>
            <div>
                <input placeholder="Username" type="text" {...username} />
            </div>
            <div>
                <input placeholder="Email" type="email" {...email} />
            </div>
                <button type="submit">Submit</button>
        </form>
    );
}

export default Form;