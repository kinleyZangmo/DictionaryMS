import React from "react";
import EditHistory from "./Components/EditHistory";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";

function App() {
  return (
    <>
 
      <Navbar />
      <div className="mainContainer">
        <SearchBar />
      </div>
      <EditHistory/>


    </>
  );
}

export default App;
