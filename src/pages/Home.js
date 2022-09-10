import React, { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase-config";
import Posts from "../components/Posts";

const Home = ({ isAuth }) => {
  const [postLists, setPostLists] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const getPosts = async () => {
    try {
      const data = await getDocs(postsCollectionRef);
      setPostLists(
        data.docs.map((post) => ({
          ...post.data(),
          id: post.id,
        }))
      );
    } catch (err) {
      console.log(err);
    }
  };

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    getPosts();
  };

  const favoritesHandler = (id, action) => {
    const docRef = doc(db, "posts", id);
    const data = action === "add" ? { favorites: true } : { favorites: false };

    updateDoc(docRef, data)
      .then((docRef) => {
        console.log("Value has been updated");
      })
      .catch((error) => {
        console.log(error);
      });
    getPosts();
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="home-container">
      <Posts
        data={postLists}
        isAuth={isAuth}
        deletePost={deletePost}
        favoritesHandler={favoritesHandler}
      ></Posts>
    </div>
  );
};

export default Home;
