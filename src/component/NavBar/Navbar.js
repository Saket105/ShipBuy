import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../NavBar/Navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="links-left">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/men">Men</NavLink>
        <NavLink to="/women">WoMen</NavLink>
        <NavLink to="/kid">Kid</NavLink>
        <NavLink to="/bestsellers">BestSellers</NavLink>
        <NavLink to="/newArrivals">New Arrivals</NavLink>
        <input className="input" type="text" placeholder="Search for Items" />
      </div>

      <div className="links-right">
        <Link to="/login">Login</Link>

        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default NavBar;
