import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
            <h3>You have entered an error 404 page, go back to the previous page</h3>
            <Link to={-1}>
                <button variant="warning">Go Back to Home</button>
            </Link>
        </>
    );
}

export default NotFound;