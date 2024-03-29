import './DishItem.css';
import { updateCart } from '../../http';
import { currencyFormatter } from '../../util/formatting';

export default function DishItemList({ name, category, description, price, id }) {
    async function addToCart(obj) {
        try {
            await updateCart([obj]);
        } catch (error) {
            console.log(error);
        }
        console.log(obj);
    }

    return (
        <>
            <div className="dishItem">
                <div className="item-details">
                    <p>{name}</p>
                    <p>{category}</p>
                    <p>{description}</p>
                    <p>{currencyFormatter.format(price)}</p>
                </div>
                <div className="btn-container">
                    <button type="button" className="add-btn" onClick={() => { addToCart({ id, name }) }}>Add</button>
                </div>
            </div>
        </>
    )
}