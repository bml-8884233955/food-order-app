import { fetchCartItem } from "../http";
import { useState, useEffect } from "react";

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        async function getCartItems() {
            const data = await fetchCartItem();
            setCartItems(data.data);
        }
        getCartItems();
    }, []);

    return (
        <>
            <p>  Cart</p>
            {
                cartItems.map((items) => (
                    <>
                        <p> {items.id}</p>
                        <p>{items.name} </p>
                    </>
                ))
            }
        </>
    );
}