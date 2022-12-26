import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import Content from "./Components/Content";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="mainContainer">
        <Routes>
          <Route exact path="/" element={<SearchBar />} />
          <Route
            path="/about"
            element={
              <>
                <SearchBar />,
                <Content />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
