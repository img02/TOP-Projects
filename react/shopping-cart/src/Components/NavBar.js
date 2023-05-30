import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="./store">Store</Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
