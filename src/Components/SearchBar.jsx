import React from "react";
import "./searchBar.css";
import * as FaIcons from "react-icons/fa";

function SearchBar() {
  return (
    <div className="container">
      <div className="input-group">
        <form>
          <input type="text" placeholder="Search... " />
          <FaIcons.FaSearch />
        </form>
      </div>
      <div className="buttons">
        <button>Add works</button>
        <button>Dictionary</button>
        <button>Catagory</button>
      </div>
    </div>
  );
}
export default SearchBar;
