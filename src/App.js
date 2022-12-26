import React from "react";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";

function App() {
  return (
    <>
      <Navbar />
      <div className="mainContainer">
        <SearchBar />
      </div>
    </>
  );
}

export default App;
