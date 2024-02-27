import ReturantItemList from "../components/ReturantItemList/ReturantItemList";
import { RESTURANTS } from "../assets/swiggy";
import { useNavigate } from "react-router-dom";


export default function Home() {
    const resturants = RESTURANTS.data.restaurants;
    const navigate = useNavigate();

    function navigateToDetails(id) {
        console.log(id);
        navigate(`/resturants/${id}`);
    }

    return (
        <div>
            {
                resturants.map((item) =>
                    <ReturantItemList key={item.info.id} info={item.info} onClick={() => navigateToDetails(item.info.id)} />
                )
            }
        </div >
    );
}