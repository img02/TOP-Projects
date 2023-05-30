import "../Assets/ShoppingCart.css";
import CartItem from "./CartItem";

const ShoppingCart = ({ cart, updateQuantity }) => {
    return (
        <div className="shopping-cart-main-hidden" id="shopping-cart-main">
            this is the shopping cart
            <ul>
                {cart.map((item) => (
                    <CartItem
                        item={item}
                        cart={cart}
                        updateQuantity={updateQuantity}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ShoppingCart;
