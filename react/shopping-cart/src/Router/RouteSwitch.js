import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Store from "../Pages/Store";
import NavBar from "../Components/NavBar";

const RouteSwitch = ({ addToCart }) => {
    return (
        <HashRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route
                    path="/store"
                    element={<Store addToCart={addToCart} />}
                ></Route>
            </Routes>
        </HashRouter>
    );
};
export default RouteSwitch;
