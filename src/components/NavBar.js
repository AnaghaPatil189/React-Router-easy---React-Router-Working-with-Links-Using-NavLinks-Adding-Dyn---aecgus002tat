import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className={"index-link"} to="/">
            Index
          </
        </li>
        <li>
          <NavLink className={"home-link"} to="/home">
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};NavLink>
