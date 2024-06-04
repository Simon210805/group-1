import React, { useState } from 'react';
import style from "./Header.module.css";
import { CiMenuBurger } from "react-icons/ci";

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
      <div>
        <section className={style.header_container}>
          <div className={style.logo}>
            <img
              src="https://www.evangadi.com/themes/humans/assets/hammerlook/img/misc/evangadi-logo-black.png"
              alt="Evangadi Logo"
            />
          </div>
          <button className={style.menuButton} onClick={toggleDropdown}>
            <CiMenuBurger />
          </button>
          <div className={style.menu}>
            <div
              className={`${style.dropdown} ${
                isDropdownOpen ? style.dropdownVisible : ""
              }`}
            >
              <p style={{ paddingTop: "10px" }}>Home</p>
              <p style={{ paddingTop: "10px" }}>How it works</p>
              <button className={style.btn} type="submit">
                Sign In
              </button>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Header;
