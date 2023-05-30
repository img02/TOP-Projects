import { useState } from "react";
import ShoppingCart from "./Components/ShoppingCart";
import RouteSwitch from "./Router/RouteSwitch";
import { addToCart, updateCartQuantity } from "./lib/Cart";

const App = () => {
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
            <ShoppingCart cart={cart} updateQuantity={updateCartItemQuantity} />
            <RouteSwitch addToCart={addItemToCart} />
            <button onClick={toggleCartVisibility}>cart</button>
        </div>
    );
};

export default App;
