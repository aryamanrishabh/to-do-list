import React from "react";
import "../App.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Blogs from "./Blogs";

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/blogs">
        <Blogs />
      </Route>
    </Router>
  );
}

export default App;
