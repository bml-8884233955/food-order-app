export async function fetchResturants() {
    const response = await fetch('http://localhost:3000/resturants/');
    const data = await response.json();
    if (!response.ok) {
        throw new Error('Failed to fetch resturants');
    }
    return data.resturants;
}

export async function fetchResturantMenu() {
    const response = await fetch('http://localhost:3000/resturant-menu/');
    const data = await response.json();
    if (!response.ok) {
        throw new Error('Failed to fetch menu');
    }
    return data.menu;
}

export async function updateCart(data) {
    const response = await fetch('http://localhost:3000/cart-item/', {
        method: 'PUT',
        body: JSON.stringify({ data: data }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const resData = await response.json();
    if (!response.ok) {
        throw new Error('Failed to update cart.');
    }
    return resData.message;
}

export async function fetchCartItem() {
    const response = await fetch('http://localhost:3000/cart-item/');
    const data = await response.json();
    if (!response.ok) {
        throw new Error('Failed to fetch menu');
    }
    return data;
}
