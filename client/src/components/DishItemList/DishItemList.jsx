import './DishItemList.css';

export default function DishItemList({ name, category, description, price }) {
    return (
        <>
            <div className="dishItem">
                <div className="item-details">
                    <p>{name}</p>
                    <p>{category}</p>
                    <p>{description}</p>
                    <p>{price}</p>
                </div>
                <div className="btn-container">
                    <button type="button" className="add-btn">Add</button>
                </div>
            </div>
        </>
    )
}