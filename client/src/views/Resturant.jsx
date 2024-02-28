import { useParams } from "react-router-dom";
import DishItem from "../components/DishItem/DishItem";
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
                    <DishItem key={itemData.id} {...itemData}></DishItem>
                ))
            }
        </>
    );
}