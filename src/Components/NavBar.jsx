import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import * as FaIcon from "react-icons/fa";
import * as CgIcon from "react-icons/cg";

const Navbar = () => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <img src="./logo.jpg" alt="logo"></img>
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
                <Link to ="/">Home</Link>
            </li>
            <li>
            <Link to ="/edit-history">Edit History</Link>
            </li>
            <li>
            <Link to ="/comment-list">Comment List</Link>
            </li>
            <li>
            <Link to ="/users">Users</Link>
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
