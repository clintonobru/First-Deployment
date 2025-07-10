import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemedButton = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <button 
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            style={{
                backgroundColor: theme === "light" ? "#fff" : "#333",
                color: theme === "light" ? "#000" : "#fff",
            }}
        > 
            Toggle Theme
        </button>
    );
};

export default ThemedButton;