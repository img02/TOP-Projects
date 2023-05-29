import "../Assets/ProductCard.css";

const ProductCard = ({ product: { name, id, price, stock }, addToCart }) => {
    return (
        <div className="product-card-main">
            <div>{name}</div>
            <div>{id} (del this later)</div>
            <div>{price}</div>
            <div>{stock}</div>
            <button
                onClick={() => {
                    const newItem = {
                        name: name,
                        id: id,
                        price: price,
                        quantity: 1
                    };
                    addToCart(newItem, 1);
                }}
            >
                add 1
            </button>
        </div>
    );
};

export default ProductCard;
