import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
const Navbar = ({ isAuth, setIsAuth }) => {
  let navigate = useNavigate();
  let isAuthenticated = localStorage.getItem("isAuth");

  const logOut = () => {
    signOut(auth).then((result) => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };
  return (
    <nav>
      <Link className={classes["nav-link"]} to="/">
        Home
      </Link>

      {!isAuthenticated ? (
        <Link className={classes["nav-link"]} to="/login">
          Login
        </Link>
      ) : (
        <>
          <Link className={classes["nav-link"]} to="/create-post">
            Create post
          </Link>
          <button onClick={logOut}>Log Out</button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
