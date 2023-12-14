const addToDb = id => {
    const shoppingCart = getShoppingCart();

    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem('ema-shop', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    const shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('ema-shop', JSON.stringify(shoppingCart));
    }
}


const getShoppingCart = () => {
    let shoppingCart = {};
    const storedCart = localStorage.getItem('ema-shop');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('ema-shop');
}

export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart
}