import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar center ">
      <a className="navbar-brand" href="/">Google books</a>
      <Link to='/' className="link-item" >Search</Link>
      <Link to='/saved' className="link-item" >Saved</Link>
    </nav>
  );
}

export default Nav;
