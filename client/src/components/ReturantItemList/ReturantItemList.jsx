import './ReturantItemList.css';
export default function ReturantItemList({ info, onClick }) {
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
}