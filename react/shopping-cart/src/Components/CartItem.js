const CartItem = ({ item, updateQuantity }) => {
    return (
        <li key={item.id}>
            <div>{item.name}</div>
            <div>id. {item.id}</div>
            <div>quantity. {item.quantity}</div>
            <div>${item.price * item.quantity}</div>

            <div className="cart-item-quantity-div">
                <button
                    onClick={() => {
                        updateQuantity(item.id, item.quantity - 1);
                    }}
                >
                    -
                </button>
                <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => {
                        if (isNaN(e.target.valueAsNumber)) {
                            e.target.value = item.quantity;
                            return;
                        }

                        const quant = Math.trunc(e.target.valueAsNumber);
                        e.target.value = quant;
                        updateQuantity(item.id, quant);
                    }}
                />
                <button
                    onClick={() => {
                        updateQuantity(item.id, item.quantity + 1);
                    }}
                >
                    +
                </button>
            </div>
            <p>-------------</p>
        </li>
    );
};

export default CartItem;
