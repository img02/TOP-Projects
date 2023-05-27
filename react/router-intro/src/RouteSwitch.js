import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import Settings from "./Settings";
import Friends from "./Friends";
import Navbar from "./NavBar";

const RouteSwitch = () => {
    return (
        <div>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/friends" element={<Friends />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default RouteSwitch;
