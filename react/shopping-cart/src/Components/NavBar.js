import { Link } from "react-router-dom";
import "../Assets/NavBar.css";

const NavBar = () => {
    return (
        <div>
            <ul className="nav-bar-list">
                <li className="nav-bar-list-item">
                    <Link to="/" className="nav-bar-link">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="./store" className="nav-bar-link">
                        Store
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
