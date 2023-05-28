import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Store from "../Pages/Store";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/store" element={<Store />}></Route>
            </Routes>
        </BrowserRouter>
    );
};
export default RouteSwitch;
