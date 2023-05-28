import NavBar from "./Components/NavBar";
import RouteSwitch from "./Router/RouteSwitch";

const App = () => {
    // add shopping cart state here and component here
    // add fn to update state
    // add fn to update shopping cart
    // add fn to 'checkout' (don't need to impl page)
    // pass functions to routeswitch -> store/home page

    return (
        <div>
            <NavBar />
            <RouteSwitch />
        </div>
    );
};

export default App;
