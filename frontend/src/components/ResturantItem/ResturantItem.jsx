import './ResturantItem.css';
const ResturantItem = ({ info, onClick }) => {
    return (
        <>
            <div className="resturant-list-container" onClick={onClick}>
                <div className="content">
                    <div className="rest-desc">
                        <p className="title">{info.name}</p>
                        <p>{info.areaName}</p>
                        <div>
                            <span>{info.avgRating}</span>
                            <p>Cost For Two {info.costForTwo}</p>
                        </div>
                    </div>
                    <div className="rest-img">
                        <img className="" src={`http://localhost:3000/resturants/${info.imageId}`} alt={info.name}></img>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResturantItem;
