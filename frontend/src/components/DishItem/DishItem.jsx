import styles from './dishItem.module.scss';
import { currencyFormatter } from '../../util/formatting';
import Button from '../Button';
// import { CartContext } from "../context/shopping-cart-context";

const DishItemList = ({ dishObj }) => {
    // const { handleAddItemToCart } = CartContext();
    const { id, name, category, price } = dishObj;
    // const itemObj = { id, name, category, price };
    return (
        <>
            <div className={styles.dishItem}>
                <div className={styles.itemDetails}>
                    <p>{dishObj.name}</p>
                    <p>{dishObj.category}</p>
                    <p>{dishObj.description}</p>
                    <p>{currencyFormatter.format(dishObj.price)}</p>
                </div>
                <div className={styles.btnContainer}>
                    {/* <Button label="add" onClick={() => handleAddItemToCart(itemObj)} /> */}
                </div>
            </div>
        </>
    );
};

export default DishItemList;