import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();
  const createPostHandler = async () => {
    console.log("create post");
    await addDoc(postsCollectionRef, {
      title: title,
      text: text,
      favorites: false,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };
  return (
    <div className="create-post-container">
      <PostForm
        setTitle={setTitle}
        setText={setText}
        createPostHandler={createPostHandler}
      />
    </div>
  );
};

export default CreatePost;
