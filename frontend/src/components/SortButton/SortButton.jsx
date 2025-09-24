import React, { useState, useEffect, useRef } from "react";
import styles from "./SortButton.module.scss";

const SortButton = ({ onSortChange }) => {
  const [open, setOpen] = useState(false);
  let prev = false;
  const dropdownRef = useRef(null);
  const toggleDropDown = (e) => {
    e.stopPropagation();
    setOpen((prev = !prev));
  };
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  const handleClick = (value) => {
    onSortChange(value); // pass value to parent
    setOpen(false); // close dropdown after click
  };

  return (
    <div ref={dropdownRef} className={`dropxdown ${styles["sort-btn"]}`}>
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="sortBtnMenu"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        onClick={toggleDropDown}
      >
        Sort
      </button>
      {open && (
        <div
          className={`dropdown-menu ${open ? " show" : ""}`}
          aria-labelledby="sortBtnMenu"
        >
          <a
            className="dropdown-item"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick("raiting");
            }}
          >
            Raiting
          </a>
          <a
            className="dropdown-item"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick("relevance");
            }}
          >
            Relevance
          </a>
          {/* <a className="dropdown-item" href="#">Cost| Low to High</a>
                <a className="dropdown-item" href="#">Cost| High to Low</a> */}
        </div>
      )}
    </div>
  );
};

export default SortButton;
