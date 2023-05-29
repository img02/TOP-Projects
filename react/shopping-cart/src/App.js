import NavBar from "./Components/NavBar";
import ShoppingCart from "./Components/ShoppingCart";
import RouteSwitch from "./Router/RouteSwitch";

const App = () => {
    // add shopping cart state here and component here
    // add fn to update state
    // add fn to update shopping cart
    // add fn to 'checkout' (don't need to impl page)
    // pass functions to routeswitch -> store/home page

    const toggleCartVisibility = () => {
        const cartElement = document.getElementById("shopping-cart-main");
        cartElement.className =
            cartElement.className === "shopping-cart-main-hidden"
                ? "shopping-cart-main-shown"
                : "shopping-cart-main-hidden";
    };

    return (
        <div>
            <NavBar />
            <ShoppingCart />
            <RouteSwitch />
            <button onClick={toggleCartVisibility}>cart</button>
        </div>
    );
};

export default App;
