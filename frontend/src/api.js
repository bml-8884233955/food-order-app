import { API_URLS } from "./http";
import { useFetch } from "./hooks/useFetch";

export const useApi = () => {
    const { get, post, put, loading, error } = useFetch();

    const getResturant = async () => await get(API_URLS.GET_RESTURANTS);

    const getResturantMenu = async () => await get(API_URLS.GET_RESTURANT_MENU);

    const getCart = async () => await get(API_URLS.GET_CART);

    const addToCart = async () => await post(API_URLS.ADD_CART);

    const updateCart = async (userId, updatedCart) =>
        await put(API_URLS.UPDATE_CART(userId), updatedCart);

    return { getCart, getResturant, getResturantMenu, addToCart, updateCart, loading, error };
}