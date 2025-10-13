import { useContext, useEffect } from "react";
import { CartContext } from "../context/shopping-cart-context";

const Cart = () => {
    const cartCtx = useContext(CartContext);
    console.log('cart items' + cartCtx.items);
    // useEffect(() => {
    //     cartCtx.getCartItem();
    // }, []);
    const totalPrice = cartCtx.items.length ? cartCtx.items.reduce((acc, item) => acc + item.price * item.quantity, 0) : 0;

    const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;


    return (
        < div id="cart">
            <p>Your Cart</p>
            {cartCtx.items.length === 0 && <p> No items in cart</p>}
            {cartCtx.items.length > 0 && (
                <div>{
                    cartCtx.items.map((items) => (

                        <div key={items.id} >
                            <p> {items.id}</p>
                            <p>{items.name} </p>
                        </div>
                    ))
                }
                </div>
            )}
            <p> Total Price:  {formattedTotalPrice}</p>

        </div>
    );
};
export default Cart;