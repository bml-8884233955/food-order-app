import { useParams } from "react-router-dom";
import DishItem from "../components/DishItem";
// import { DISH_ITEM } from "../assets/bakingoMenu";
import { useEffect, useState } from "react";
import { useApi } from "../api";


export default function Resturant() {
    const params = useParams();
    const { getResturantMenu } = useApi();
    // const dishItems = DISH_ITEM.data.itemCards;
    const [menu, setMenu] = useState([]);
    const [resturantName, setResturantName] = useState();

    useEffect(() => {
        async function fetchMenuItems() {
            try {
                const restObj = await getResturantMenu();
                setMenu(restObj.menu.data.itemCards);
                setResturantName(menu.name);
            } catch (err) {
                console.log("Error fetching carts:", err);
            }
        }
        fetchMenuItems();
    }, []);

    return (
        <>
            <p className="resturant-title">
                <span className="resturant-id">Resturant Id : {params.resturantId}</span>
                <span className="resturant-name">Resturant Name: {resturantName}</span>
            </p >
            {
                menu.map((itemData) => (
                    <DishItem key={itemData.id} dishObj={itemData}></DishItem>
                ))
            }
        </>
    );
}