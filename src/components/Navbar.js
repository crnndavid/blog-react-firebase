import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <Link className={classes["nav-link"]} to="/">
        Home
      </Link>
      <Link className={classes["nav-link"]} to="/create-post">
        Create post
      </Link>
      <Link className={classes["nav-link"]} to="/login">
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
