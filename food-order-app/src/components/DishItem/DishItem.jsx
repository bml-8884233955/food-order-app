import styles from './dishItem.module.scss';
import { updateCart } from '../../http';
import { currencyFormatter } from '../../util/formatting';
import Button from '../Button';


const DishItemList = ({ name, category, description, price, id }) => {

    const handleClick = async (obj) => {
        try {
            await updateCart([obj]);
        } catch (error) {
            console.log(error);
        }
        console.log('Btn Clicked');
    }

    return (
        <>
            <div className={styles.dishItem}>
                <div className={styles.itemDetails}>
                    <p>{name}</p>
                    <p>{category}</p>
                    <p>{description}</p>
                    <p>{currencyFormatter.format(price)}</p>
                </div>
                <div className={styles.btnContainer}>
                    <Button label="add" onClick={() => handleClick({ id, name, description })} />
                </div>
            </div>
        </>
    );
};

export default DishItemList;