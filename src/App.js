import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import Content from "./Components/Content";

function App() {
  return (
    <Router>
      <NavBar />

      <div className="mainContainer">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <SearchBar />
                <Content />
              </>
            }
          />
          <Route path="/edit-history" element={<></>} />
          <Route path="/comment-list" element={<></>} />
          <Route path="/users" element={<></>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
