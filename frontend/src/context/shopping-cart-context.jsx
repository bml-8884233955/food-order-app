import { createContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useApi } from "../api";

export const CartContext = createContext({
    items: [],
    addItemToCart: () => { },
    getCartItem: () => { },
    loading: false,
    error: null
});

export default function CartContextProvider({ children }) {
    const { getCart, addToCart, loading, error } = useApi();
    const [shoppingCart, setShoppingCart] = useState({});


    async function handleAddItemToCart(itemObj) {
        try {
            const cartObj = await addToCart(itemObj);
            setShoppingCart((prev) => [...prev, cartObj.cart]);
        } catch (err) {
            console.log("Error Add To Cart:", err);
        }
        console.log(`Item Added to Cart ${JSON.stringify(itemObj, null, 2)}`);
    }

    async function handleGetCartItem() {
        try {
            const cartObj = await getCart();
            setShoppingCart(cartObj);
        } catch (err) {
            console.log("Error Get Cart:", err);
        }
    }

    const ctxValue = {
        items: shoppingCart?.items ?? [],
        addItemToCart: handleAddItemToCart,
        getCartItem: handleGetCartItem
    };

    return <CartContext.Provider value={ctxValue}>
        {children}
    </CartContext.Provider>

}