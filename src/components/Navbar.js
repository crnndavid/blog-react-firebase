import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import Button from "./UI/Button";
const Navbar = ({ isAuth, setIsAuth }) => {
  let navigate = useNavigate();
  let isAuthenticated = localStorage.getItem("isAuth");

  const logOut = () => {
    signOut(auth).then((result) => {
      console.log("User log out");
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
        <Link className={classes["btn-connect"]} to="/login">
          Login
        </Link>
      ) : (
        <>
          <Link className={classes["nav-link"]} to="/create-post">
            Create post
          </Link>

          <Button text={"Log out"} clickHandler={logOut} />

        </>
      )}
    </nav>
  );
};

export default Navbar;
