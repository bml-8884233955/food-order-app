const API_BASE_URL = "http://localhost:3000/api";

export const API_URLS = {
    GET_CART: `${API_BASE_URL}/cart`,
    ADD_CART: `${API_BASE_URL}/cart`,
    UPDATE_CART: (userId) => `${API_BASE_URL}/cart/${userId}`,
    DELETE_CART: (userId) => `${API_BASE_URL}/cart/${userId}`,
    GET_RESTURANTS: `${API_BASE_URL}/resturants/`,
    GET_RESTURANT_MENU: `${API_BASE_URL}/resturant-menu/`
};