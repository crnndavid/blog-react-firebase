import React from "react";
import { auth } from "../firebase-config";
import Button from "./UI/Button";
import classes from "./Posts.module.css";
const Posts = ({ postLists, isAuth, deletePost }) => {
  return (
    <div className={classes["posts-container"]}>
      <h1>Posts</h1>
      {postLists.map((post) => (
        <div className={classes["post-container"]} key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.text}</p>
          <p className={classes.author}>@{post.author.name}</p>
          {isAuth && post.author.id === auth.currentUser.uid && (
            <Button clickHandler={() => deletePost(post.id)} text={"Delete"} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Posts;
