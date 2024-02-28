import { useParams } from "react-router-dom";
import DishItemList from "../components/DishItemList/DishItemList";
// import { DISH_ITEM } from "../assets/bakingoMenu";
import { useEffect, useState } from "react";
import { fetchResturantMenu } from "../http";

export default function Resturant() {
    const params = useParams();
    // const dishItems = DISH_ITEM.data.itemCards;
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        async function fetchMenuItems() {
            const menu = await fetchResturantMenu();
            setMenu(menu.data.itemCards);
        }
        fetchMenuItems();
    }, []);

    return (
        <>
            <p className="resturant-title">
                {/* Resturant Id : {params.resturantId} */}
            </p>
            {
                menu.map((itemData) => (
                    <DishItemList key={itemData.id} {...itemData}></DishItemList>
                ))
            }
        </>
    );
}