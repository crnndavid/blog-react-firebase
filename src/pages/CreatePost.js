import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();
  const createPostHandler = async () => {
    await addDoc(postsCollectionRef, {
      title: title,
      text: text,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };
  return (
    <div>
      <div className="cpContainer">
        <h1>Create Post</h1>
        <div className="inputGroup">
          <label htmlFor="">Title</label>
          <input
            type="text"
            placeholder="Title..."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputGroup">
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
        <button onClick={createPostHandler}>Submit post</button>
      </div>
    </div>
  );
};

export default CreatePost;
