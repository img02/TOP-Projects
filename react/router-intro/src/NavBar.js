const Navbar = () => {
    return (
        <div>
            <ul
                style={{
                    "list-style-type": "none",
                    margin: 0,
                    padding: 0
                }}
            >
                <li>
                    <a href="./" style={{ padding: "0 10px" }}>
                        Homes
                    </a>
                    <a href="./profile" style={{ padding: "0 10px" }}>
                        Profile
                    </a>
                    <a href="./friends" style={{ padding: "0 10px" }}>
                        Friends
                    </a>
                    <a href="./settings" style={{ padding: "0 10px" }}>
                        Settings
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
