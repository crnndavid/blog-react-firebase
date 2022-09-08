import React from "react";
import classes from "./Button.module.css";
const Button = ({ text, clickHandler }) => {
  return (
    <button className={`${classes.btn}`} onClick={clickHandler}>
      {text}
    </button>
  );
};

export default Button;
