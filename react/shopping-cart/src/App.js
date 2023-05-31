import { useState } from "react";
import { addToCart, updateCartQuantity } from "./lib/Cart";
import ShoppingCart from "./Components/ShoppingCart";
import RouteSwitch from "./Router/RouteSwitch";
import "./Assets/App.css";

const App = () => {
    const testCart = [
        { name: "prod 1", id: 1, price: 10, quantity: 1 },
        { name: "prod 2", id: 2, price: 20, quantity: 2 },
        { name: "prod 3", id: 3, price: 30, quantity: 3 }
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
        moveCartButtonWhenCartShown();
    };

    const moveCartButtonWhenCartShown = () => {
        const button = document.getElementById("cart-button");
        button.className =
            button.className === "cart-button"
                ? "cart-button-cart-shown"
                : "cart-button";
    };

    return (
        <div className="app-main-div">
            <ShoppingCart cart={cart} updateQuantity={updateCartItemQuantity} />
            <RouteSwitch addToCart={addItemToCart} />
            <div
                id="cart-button"
                className="cart-button"
                onClick={toggleCartVisibility}
            >
                Cart
            </div>
        </div>
    );
};

export default App;
