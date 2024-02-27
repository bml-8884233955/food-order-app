import { useParams } from "react-router-dom";
import DishItemList from "../components/DishItemList/DishItemList";
import { DISH_ITEM } from "../assets/bakingoMenu";

export default function Resturant() {
    const params = useParams();
    const dishItems = DISH_ITEM.data.itemCards;
    return (
        <>
            <p className="resturant-title">
                Resturant Id : {params.resturantId}
            </p>
            {
                dishItems.map((itemData) => (
                    <DishItemList key={itemData.id} {...itemData}></DishItemList>
                ))
            }
        </>
    );
}