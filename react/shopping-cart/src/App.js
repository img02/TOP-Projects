import { useState } from "react";
import NavBar from "./Components/NavBar";
import ShoppingCart from "./Components/ShoppingCart";
import RouteSwitch from "./Router/RouteSwitch";

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

    const updateCart = (cart) => {
        setCart(cart);
    };

    const updateCartQuantity = (id, quantity) => {
        const item = cart.find((i) => i.id === id);
        if (item === undefined) return;

        const index = cart.indexOf(item);

        // add start of cart
        let newCart = cart.slice(0, index);

        // add updated item
        if (quantity !== 0) {
            const newItem = structuredClone(item);
            newItem.quantity = quantity;
            newCart.push(newItem);
            console.log(newCart);
        }

        // add rest of cart, if exists
        if (index < cart.length - 1) {
            newCart = newCart.concat(cart.slice(index + 1, cart.length));
        }

        setCart(newCart);
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
            <ShoppingCart cart={cart} updateQuantity={updateCartQuantity} />
            <RouteSwitch />
            <button onClick={toggleCartVisibility}>cart</button>
        </div>
    );
};

export default App;
