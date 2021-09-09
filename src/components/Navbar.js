import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-info">
        <Link to="/">
          <span className="navbar-brand text-white mb-0 ml-5 h1">ToDo</span>
        </Link>
        <Link to="/blogs">
          <span className="text-white mr-5">Blog Posts</span>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
