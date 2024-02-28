import ReturantItem from "../components/ReturantItem/ReturantItem";
// import { RESTURANTS } from "../assets/swiggy";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchResturants } from "../http";


export default function Home() {
    // const resturants = RESTURANTS.data.restaurants;
    const navigate = useNavigate();
    const [resturants, setResturants] = useState([]);

    useEffect(() => {
        async function fetchResturantList() {
            const resturants = await fetchResturants();
            setResturants(resturants.data.restaurants);
        }
        fetchResturantList();
    }, []);

    function navigateToDetails(id) {
        console.log(id);
        navigate(`/resturants/${id}`);
    }

    return (
        <div>
            {
                resturants.map((item) =>
                    <ReturantItem key={item.info.id} info={item.info} onClick={() => navigateToDetails(item.info.id)} />
                )
            }
        </div >
    );
}