import React from "react";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";
// import { Loading } from "./components/Loaders";

import Router from "./Routes";
import "./style/Page.scss";

function App({ isSearching, moviesFound }) {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="Page-body">
          <Router />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
