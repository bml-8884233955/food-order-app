import { ResturantItem, SortButton } from "../components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchResturants } from "../http";


export default function Home() {
    const navigate = useNavigate();
    const [resturantData, setResturantData] = useState([]);
    const [displayedResturants, setDisplayedResturants] = useState([]);
    const [sortOrder, setSortOrder] = useState([]);
    let resturantsArr;

    useEffect(() => {
        async function fetchResturantList() {
            resturantsArr = await fetchResturants();
            setResturantData(resturantsArr.data.items);
            setDisplayedResturants(resturantsArr.data.items);
        }
        fetchResturantList();
    }, []);

    const navigateToDetails = (id) => {
        console.log(id);
        navigate(`/resturants/${id}`);
    }

    useEffect(() => {
        let updated = [...resturantData];

        if (sortOrder === 'raiting') {
            updated.sort((a, b) => b.info.avgRating - a.info.avgRating);
        } else if (sortOrder === 'relevance') {
            updated = [...resturantData];
        }
        setDisplayedResturants(updated);
    }, [resturantData, sortOrder])



    return (
        <div className="resturant-item-container">
            <div className="filter-row">
                <SortButton
                    setSortOrder={setSortOrder}
                    sortOrder={sortOrder}
                ></SortButton>
            </div>
            {
                displayedResturants.map((item) =>
                    <ResturantItem key={item.info.id} info={item.info} onClick={() => navigateToDetails(item.info.id)} />
                )
            }
        </div >
    );
}