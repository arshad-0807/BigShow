import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const headerMenus = [
    {
      url: "/",
      name: "Home",
      icon: "",
    },
    {
      url: "/movies-page",
      name: "Movies",
      icon: "",
    },
    {
      url: "/web-shows",
      name: "Web Shows",
      icon: "",
    },
    {
      url: "/watchlist",
      name: "Watch List",
      icon: faBookmark,
    },
    {
      url: "/sign-in",
      name: "Sign In",
      icon: faCircleUser,
    },
  ];
  // const mobNav = document.querySelector(".nav-links");

  const [menuOpen, setMenuOpen] = useState(false);

  const showMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="z-1">
        <div className="logo">
          <img src="logo.png" alt="" />
        </div>
        <input
          type="search"
          name="search"
          id="search_input"
          placeholder="Search Bigshow"
        />

        <nav>
          <ul className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
            <FontAwesomeIcon
              icon={faXmark}
              className="close-menu"
              onClick={closeMenu}
            />
            {headerMenus.map((data, index) => (
              <li key={index}>
                <Link to={data.url} className="nav-link">
                  {data.name}
                  {data.icon && (
                    <FontAwesomeIcon
                      icon={data.icon}
                      className="watchlist-icon"
                    />
                  )}
                </Link>
              </li>
            ))}

            {/* <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
             */}
          </ul>
        </nav>

        <div className="head-icons">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search_icon" />

          <img src="menu.png" alt="" className="menu-icon" onClick={showMenu} />
        </div>
      </header>
    </>
  );
};

export default Header;
