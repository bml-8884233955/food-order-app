export default function Sort() {

    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="sortBtnMenu"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort
            </button>
            <div className="dropdown-menu" aria-labelledby="sortBtnMenu">
                <a className="dropdown-item" href="#">Raiting</a>
                <a className="dropdown-item" href="#">Cost| Low to High</a>
                <a className="dropdown-item" href="#">Cost| High to Low</a>
            </div>
        </div>
    )
}