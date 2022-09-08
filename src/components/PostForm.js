import React from "react";
import classes from "./PostForm.module.css";
import Button from "./UI/Button";
const PostForm = ({ setText, setTitle, createPostHandler }) => {
  return (
    <div className={classes["form-container"]}>
      <h1>Create Post</h1>
      <div className={classes["input-group"]}>
        <label htmlFor="">Title</label>
        <input
          type="text"
          placeholder="Title..."
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={classes["input-group"]}>
        <label htmlFor="">Post:</label>
        <textarea
          name="description"
          id=""
          cols="30"
          rows="10"
          placeholder="Post text"
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <Button text={"Create"} clickHandler={createPostHandler} />
    </div>
  );
};

export default PostForm;
