import { Link, NavLink } from "react-router-dom";

function NavbarRoute() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="active-link">About</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavbarRoute;