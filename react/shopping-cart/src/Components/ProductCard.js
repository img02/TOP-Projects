import { useState } from "react";
import "../Assets/ProductCard.css";

const ProductCard = ({ product: { name, id, price, stock }, addToCart }) => {
    const [itemQuantity, setQuantity] = useState(1);
    return (
        <div className="product-card-main">
            <div>{name}</div>
            <div>{id} (del this later)</div>
            <div>{price}</div>
            <div>{stock}</div>
            <input
                className="product-quantity-input"
                type="number"
                min={1}
                max={99}
                required
                defaultValue={itemQuantity}
                onChange={(e) => {
                    let quant = e.target.valueAsNumber;

                    if (isNaN(e.target.valueAsNumber)) {
                        e.target.value = 1;
                        return; // mebe show error
                    }

                    // get rid of decimals
                    quant = Math.trunc(quant);
                    e.target.value = quant;

                    setQuantity(quant);
                }}
            />
            <button
                onClick={() => {
                    const newItem = {
                        name: name,
                        id: id,
                        price: price,
                        quantity: itemQuantity
                    };
                    addToCart(newItem);
                }}
            >
                add.
            </button>
        </div>
    );
};

export default ProductCard;
