import ProductCard from "../Components/ProductCard";

const Store = ({ addToCart }) => {
    const storeItems = [
        { name: "prod 1", id: 1, price: 10, stock: 10 },
        { name: "prod 2", id: 2, price: 20, stock: 20 },
        { name: "prod 3", id: 3, price: 30, stock: 30 },
        { name: "prod 4", id: 4, price: 40, stock: 40 }
    ];

    return (
        <div>
            <h1>Store Page</h1>
            <p>Buy something!</p>
            <div className="store-items">
                {storeItems.map((m) => (
                    <ProductCard product={m} addToCart={addToCart} key={m.id} />
                ))}
            </div>
        </div>
    );
};

export default Store;
