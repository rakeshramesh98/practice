import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <Link to="/">
        <h3>Home</h3>
      </Link>
      <ul className="nav-links">
        <Link to="/Rakesh">
          <li>Rakesh</li>
        </Link>
        <Link to="/Jeevan">
          <li>Jeevan</li>
        </Link>
        <Link to="/Teja">
          <li>Teja</li>
        </Link>
        <Link to="/Nilav">
          <li>Nilav</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
