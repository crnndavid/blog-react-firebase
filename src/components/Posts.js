import React from "react";
import { auth } from "../firebase-config";
import Button from "./UI/Button";
import classes from "./Posts.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const Posts = ({ data, isAuth, deletePost, favoritesHandler }) => {
  return (
    <div className={classes["posts-container"]}>
      <Row>
        {data.map((post) => (
          <Col md={4} xs={6} className="mb-4">
            <div className={classes["post-container"]} key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.text}</p>
              <p className={classes.author}>@{post.author.name}</p>
              {isAuth &&
                post.author.id === auth.currentUser.uid &&
                !post.favorites && (
                  <Button
                    clickHandler={() => deletePost(post.id)}
                    text={"Delete"}
                  />
                )}
              {!post.favorites && isAuth && (
                <Button
                  clickHandler={() => favoritesHandler(post.id, "add")}
                  text={"Add to favorites"}
                />
              )}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Posts;
