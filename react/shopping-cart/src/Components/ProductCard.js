import "../Assets/ProductCard.css";

const ProductCard = ({ product: { name, id, price, stock } }) => {
    console.log(name);
    return (
        <div className="product-card-main">
            <div>{name}</div>
            <div>{id} (del this later)</div>
            <div>{price}</div>
            <div>{stock}</div>
        </div>
    );
};

export default ProductCard;
