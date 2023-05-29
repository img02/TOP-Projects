import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Store from "../Pages/Store";

const RouteSwitch = ({ addToCart }) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route
                    path="/store"
                    element={<Store addToCart={addToCart} />}
                ></Route>
            </Routes>
        </BrowserRouter>
    );
};
export default RouteSwitch;
