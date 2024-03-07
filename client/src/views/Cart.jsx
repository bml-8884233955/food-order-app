import { fetchCartItem } from "../http";
import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

export default function Cart() {

    const {
        isFetching,
        fetchedData: cartItems,
        setFetchedData: setCartItems,
        error } = useFetch(fetchCartItem, []);


    return (
        <>
            <p>  Cart</p>
            {
                cartItems.map((items) => (
                    <div key={items.id}>
                        <p> {items.id}</p>
                        <p>{items.name} </p>
                    </div>
                ))
            }
        </>
    );
}