import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
const Navbar = ({ isAuth, setIsAuth }) => {
  let navigate = useNavigate();
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
      <Link className={classes["nav-link"]} to="/create-post">
        Create post
      </Link>
      {!isAuth ? (
        <Link className={classes["nav-link"]} to="/login">
          Login
        </Link>
      ) : (
        <button onClick={logOut}>Log Out</button>
      )}
    </nav>
  );
};

export default Navbar;
