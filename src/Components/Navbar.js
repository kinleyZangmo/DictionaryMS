import React, { useState } from "react";
import "./navbar.css";
import * as FaIcon from "react-icons/fa";
import * as CgIcon from "react-icons/cg";

const Navbar = () => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <img src="./logo.jpg"></img>
        </div>

        <div className="title">
          <h2>Dictionary Management System</h2>
        </div>

        <div
          className={
            showHamburgerMenu ? "menu-link mobile-menu-link" : "menu-link "
          }
        >
          <ul>
            <li>
              <a href="#">Dictionary</a>
            </li>
            <li>
              <a href="#">Edit History</a>
            </li>
            <li>
              <a href="#">Comment List</a>
            </li>
            <li>
              <a href="#">Users</a>
            </li>
            <li className="profile-logo">
              <CgIcon.CgProfile />
            </li>
          </ul>

          {/* hamburger menu */}

          <div className="hamburger-menu">
            <a
              href="#"
              onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}
            >
              <FaIcon.FaBars />
            </a>
          </div>
        </div>
      </nav>
      <hr />
      <br />
    </>
  );
};

export default Navbar;
