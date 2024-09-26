import { ResturantItem } from "../components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchResturants } from "../http";


export default function Home() {
    const navigate = useNavigate();
    const [resturants, setResturants] = useState([]);

    useEffect(() => {
        async function fetchResturantList() {
            const resturants = await fetchResturants();
            setResturants(resturants.data.items);
        }
        fetchResturantList();
    }, []);

    function navigateToDetails(id) {
        console.log(id);
        navigate(`/resturants/${id}`);
    }

    return (
        <div className="resturant-item-container">
            Home Page
            {
                resturants.map((item) =>
                    <ResturantItem key={item.info.id} info={item.info} onClick={() => navigateToDetails(item.info.id)} />
                )
            }
        </div >
    );
}