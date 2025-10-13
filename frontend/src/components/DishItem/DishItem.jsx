import styles from './dishItem.module.scss';
import { useContext } from 'react';
import { currencyFormatter } from '../../util/formatting';
import Button from '../Button';
import { CartContext } from '../../context/shopping-cart-context';

const DishItemList = ({ dishObj }) => {
    const { addItemToCart } = useContext(CartContext);
    const { id, name, category, price } = dishObj;
    const itemObj = { id, name, category, price };
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
                    <Button label="add" onClick={() => addItemToCart(itemObj)} />
                </div>
            </div>
        </>
    );
};

export default DishItemList;