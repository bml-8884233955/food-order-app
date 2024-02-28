import { useState } from "react";
import { NAV_BAR } from "../../data"
import './Header.css';
import TabButton from "../TabButton/TabButton";
import headerIcon from "../../assets/95091.png"

function Header() {
    const [selectedTab, setSelectedTab] = useState();

    function handleSelect(tab) {
        setSelectedTab(tab);
        console.log(tab);
    }

    return (
        <div>
            <nav className="navbar header-container">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={headerIcon} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                        Food
                    </a>
                    <div className="" id="navbarNav">
                        <ul className="header-tabs nav">
                            {NAV_BAR.map((items) =>
                                <TabButton key={items.link} item={items.title} link={items.link} onClick={() => handleSelect(items.title)}></TabButton>
                            )}
                        </ul>
                    </div>
                    <div className="signIn">
                        <button type="button" className="btn">Sign In</button>
                    </div>

                    <div>
                        <a className="li-link nav-link" aria-current="page" href={`/cart`}>Cart</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;