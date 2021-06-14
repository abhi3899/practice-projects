import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./header.css";

function NavbarComponent() {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-title" >Admin Dashboard</Link>
   
      <div className="nav__links">
      <NavLink to="login" className="navbar-link">
        Sign In
      </NavLink>
      <NavLink to="signup" className="navbar-link">
        Sign up
      </NavLink>
      </div>
      
    </div>
  );
}

export default NavbarComponent;
