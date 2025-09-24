import React, { useState, useEffect, useRef } from 'react';
import styles from './Sort.module.scss';

const SortButton = ({ setSortOrder, sortOrder }) => {

    const [open, setOpen] = useState(false);
    let prev = false;
    const dropdownRef = useRef(null);
    const toggleDropDown = (e) => {
        e.stopPropagation();
        setOpen(prev = !prev);
    }
    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setOpen(false);
        }
    }

    useEffect(() => {
        if (open) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, [open]);

    const handleSort = (value) => {
        setSortOrder(value);
        setOpen(false);
    };

    return (
        <div ref={dropdownRef} className={`dropxdown ${styles['sort-btn']}`}>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="sortBtnMenu"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={toggleDropDown}>
                Sort
            </button>
            {open &&
                (<div className={`dropdown-menu ${open ? ' show' : ''}`} aria-labelledby="sortBtnMenu">
                    <a className={`dropdown-item ${sortOrder === "raiting" ? "active" : ""}`} href="#" onClick={() => handleSort('raiting')}>Raiting</a>
                    <a className={`dropdown-item ${sortOrder === "relevance" ? "active" : ""}`} href="#" onClick={() => handleSort('relevance')}>Relevance</a>
                    {/* <a className="dropdown-item" href="#">Cost| Low to High</a>
                <a className="dropdown-item" href="#">Cost| High to Low</a> */}
                </div>
                )
            }

        </div>
    )
}

export default SortButton;