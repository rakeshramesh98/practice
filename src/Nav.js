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
        <Link to="/Date">
          <li>Date</li>
        </Link>
        <Link to="/Antd">
          <li>Antd</li>
        </Link>
        <Link to="/Basic">
          <li>Basic</li>
        </Link>
        <Link to="/Lookup">
          <li>Lookup</li>
        </Link>
        </ul>
        <ul className="nav-links">
        <Link to="/Noncase">
          <li>Noncase</li>
        </Link>
        <Link to="/Load">
          <li>Load</li>
        </Link>
        <Link to="/Side">
          <li>Side</li>
        </Link>
        
        <Link to="/Controlled">
          <li>Controlled</li>
        </Link>
        <Link to="/Withgrid">
          <li>Withgrid</li>
        </Link>
        <Link to="/Datapicker">
          <li>Datapicker</li>
        </Link>
        <Link to="/Borderless">
          <li>Borderless</li>
        </Link>
        </ul>
        <ul className="nav-links">
        <Link to="/Dynamicform">
          <li>DynamicForm</li>
        </Link>
        <Link to="/Formlayout">
          <li>Formlayout</li>
        </Link>
        <Link to="/Otherlayout">
          <li>Otherlayout</li>
        </Link>
        <Link to="/Registration">
          <li>Registration</li>
        </Link>
        <Link to="/Group">
          <li>Group</li>
        </Link>
        <Link to="/Prepost">
          <li>Prepost</li>
        </Link>
        </ul>
        <ul className="nav-links">
        <Link to="/GroupRadio">
          <li>GroupRadio</li>
        </Link>
        <Link to="/SolidRadio">
          <li>SolidRadio</li>
        </Link>
        <Link to="/Horizontal">
          <li>Horizontal</li>
        </Link>
        <Link to="/Title">
          <li>Title</li>
        </Link>
        <Link to="/Vertical">
          <li>Vertical</li>
        </Link><Link to="/Withouttitle">
          <li>Withouttitle</li>
        </Link>
        </ul>
        <ul>
        <Link to="/Flexstretch">
          <li>Flexstretch</li>
        </Link>
        <Link to="/Gutter">
          <li>Gutter</li>
        </Link>
        <Link to="/Typesetting">
          <li>Typesetting</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
