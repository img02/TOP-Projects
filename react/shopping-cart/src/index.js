import React from "react";
import ReactDOM from "react-dom/client";
import "./Assets/index.css";
import NavBar from "./Components/NavBar";
import RouteSwitch from "./RouteSwitch";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <NavBar />
        <RouteSwitch />
    </React.StrictMode>
);
