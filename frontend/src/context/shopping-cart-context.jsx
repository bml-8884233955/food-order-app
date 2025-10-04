import { createContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const CartContext = createContext({
    items: [],
    addItemToCart: () => { },
});

export default function CartContextProvider({ children }) {
    const { addToCart } = useFetch();
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

    const ctxValue = {
        items: shoppingCart.items,
        addToCart: handleAddItemToCart,
    };

    return <CartContext.Provider value={ctxValue}>
        {children}
    </CartContext.Provider>

}