import { useState, useEffect } from "react";

function ControlledInput() {
    const [text, setText] = useState("")
    const [password, setpassword] = useState("")

    useEffect(() => {
        console.log("Text input changed:", text);
    }, [text]); // Run whenever "text" state changes

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("From submitted with text:", text)
        console.log("From submitted with password:", password)
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                />
                <p>Current text: {text}</p>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ControlledInput;