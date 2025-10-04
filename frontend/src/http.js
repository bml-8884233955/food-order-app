const API_BASE_URL = "http://localhost:3000/api";

export const API_URLS = {
    GET_CART: `${API_BASE_URL}/cart`,
    ADD_CART: `${API_BASE_URL}/cart`,
    UPDATE_CART: (userId) => `${API_BASE_URL}/cart/${userId}`,
    DELETE_CART: (userId) => `${API_BASE_URL}/cart/${userId}`,
    GET_RESTURANTS: `${API_BASE_URL}/resturants/`,
    GET_RESTURANT_MENU: `${API_BASE_URL}/resturant-menu/`
};


// export async function fetchResturants() {
//     const response = await fetch(`${API_BASE_URL}/resturants/`);
//     const data = await response.json();
//     if (!response.ok) {
//         throw new Error('Failed to fetch resturants');
//     }
//     return data.resturants;
// }

// export async function fetchResturantMenu() {
//     const response = await fetch(`${API_BASE_URL}/resturant-menu/`);
//     const data = await response.json();
//     if (!response.ok) {
//         throw new Error('Failed to fetch menu');
//     }
//     return data.menu;
// }

// export async function addToCart(data) {
//     try {
//         const response = await fetch(`${API_BASE_URL}/cart/`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ data: data })
//         });
//         const resData = await response.json();
//         if (!response.ok) {
//             throw new Error('Failed to update cart.');
//         }
//         return resData.message;
//     } catch (error) {
//         throw (error);
//     }

// }

// export const updateCart = async (userId, updateCart) => {
//     const response = await fetch(`${API_BASE_URL}/cart/${userId}`, {
//         method: "PUT",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ data: updateCart }),
//     });

//     const data = await response.json();
//     if (!response.ok) {
//         throw new Error('Failed to fetch menu');
//     }
//     return data;
// }

// export const getCart = async () => {
//     const response = await fetch(`${API_BASE_URL}/cart/`);
//     const data = await response.json();
//     if (!response.ok) {
//         throw new Error('Failed to fetch menu');
//     }
//     return data;
// }
