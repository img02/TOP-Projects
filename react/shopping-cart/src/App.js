import { useState } from "react";
import NavBar from "./Components/NavBar";
import ShoppingCart from "./Components/ShoppingCart";
import RouteSwitch from "./Router/RouteSwitch";
import { addToCart, updateCartQuantity } from "./lib/Cart";

const App = () => {
    // add shopping cart state here and component here
    // add fn to update state
    // add fn to update shopping cart
    // add fn to 'checkout' (don't need to impl page)
    // pass functions to routeswitch -> store/home page

    const testCart = [
        { name: "one", id: 1, price: 10, quantity: 1 },
        { name: "two", id: 2, price: 20, quantity: 2 },
        { name: "three", id: 3, price: 30, quantity: 3 }
    ];
    const [cart, setCart] = useState(testCart);

    const addItemToCart = (item) => {
        addToCart(item, setCart, cart);
    };
    const updateCartItemQuantity = (id, quantity) => {
        updateCartQuantity(id, quantity, setCart, cart);
    };

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
            <ShoppingCart cart={cart} updateQuantity={updateCartItemQuantity} />
            <RouteSwitch addToCart={addItemToCart} />
            <button onClick={toggleCartVisibility}>cart</button>
        </div>
    );
};

export default App;
