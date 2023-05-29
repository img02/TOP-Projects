import "../Assets/ShoppingCart.css";

const ShoppingCart = ({ items }) => {
    const HideCart = () => {
        // todo
        //change cart classname
        //shopping-cart-main-hidden
    };

    const ShowCart = () => {
        // todo
        //change cart classname
        // shopping-cart-main
    };
    return (
        <div className="shopping-cart-main-hidden" id="shopping-cart-main">
            this is the shopping cart
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
                <li>item 5</li>
                <li>item 6</li>
            </ul>
        </div>
    );
};

export default ShoppingCart;
