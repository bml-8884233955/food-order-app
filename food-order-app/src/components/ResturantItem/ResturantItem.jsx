import './ResturantItem.css';
const ResturantItem = ({ info, onClick }) => {
    return (
        <>
            <div className="resturant-list-container" onClick={onClick}>
                <p className="title">{info.name}</p>
                {/* <img src={ } /> */}
                <p>{info.areaName}</p>
                <div>
                    <span>{info.avgRating}</span>
                    <p>Cost For Two {info.costForTwo}</p>
                </div>
            </div>
        </>
    );
};

export default ResturantItem;
