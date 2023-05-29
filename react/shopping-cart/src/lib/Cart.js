const addToCart = (item, setState, cart) => {
    const existingItem = cart.find((i) => i.id === item.id);

    if (existingItem !== undefined) {
        updateCartQuantity(
            existingItem.id,
            item.quantity + existingItem.quantity,
            setState,
            cart
        );
        return;
    }

    const newItem = {
        name: item.name,
        id: item.id,
        price: item.price,
        quantity: item.quantity
    };
    const newCart = cart.slice();
    newCart.push(newItem);
    setState(newCart);
};

const updateCartQuantity = (id, quantity, setState, cart) => {
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
    }

    // add rest of cart, if exists
    if (index < cart.length - 1) {
        newCart = newCart.concat(cart.slice(index + 1, cart.length));
    }

    setState(newCart);
};

export { addToCart, updateCartQuantity };
