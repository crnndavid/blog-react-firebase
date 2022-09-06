import React from "react";
import classes from "./LoginForm.module.css";
const LoginForm = ({ signInWithGoogle }) => {
  return (
    <div className={classes["login-with-google-container"]}>
      <div>
        <p>Sign in with Google to Continue</p>
        <button
          className={classes["login-google-btn"]}
          onClick={signInWithGoogle}
        >
          Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
