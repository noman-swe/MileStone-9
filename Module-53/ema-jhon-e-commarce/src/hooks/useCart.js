import { useEffect, useState } from "react"
import { getShoppingCart } from "../utilities/localdb";

const useCart = (products) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const savedCart = [];
        const storedCart = getShoppingCart();
        for (const id in storedCart) {
            const addedProducts = products.find(product => product.id === id);
            if (addedProducts) {
                const quantity = storedCart[id];
                addedProducts.quantity = quantity;
                savedCart.push(addedProducts);
            }
        }
        setCart(savedCart);
    }, [products]);

    return [cart, setCart];
}

export default useCart;