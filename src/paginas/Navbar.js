import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light bg-gradient-to-r from-indigo-200 bg-slate-500">
        <ul className="navbar-nav">
        <li className="nav-item">
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to={"/"}  className="nav-link">
          </Link>
        </li>        
      </ul>
      
      
    </nav>
  );
};

export default Navbar;
