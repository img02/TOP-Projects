import "../Assets/ShoppingCart.css";

const ShoppingCart = ({ cart, updateQuantity }) => {
    return (
        <div className="shopping-cart-main-hidden" id="shopping-cart-main">
            this is the shopping cart
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        <div>{item.name}</div>
                        <div>id: {item.id}</div>
                        <div>{item.price}</div>
                        <div>{item.quantity}</div>
                        <button
                            onClick={() => {
                                //console.log(`${item.id} : ${item.quantity}`);
                                updateQuantity(item.id, item.quantity + 1);
                            }}
                        >
                            add 1
                        </button>
                        <button
                            onClick={() => {
                                updateQuantity(item.id, item.quantity - 1);
                            }}
                        >
                            remove 1
                        </button>
                        <p>-------------</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingCart;
