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

  const addToFavorites = (id) => {
    const docRef = doc(db, "posts", id);
    const data = { favorites: true };
    updateDoc(docRef, data)
      .then((docRef) => {
        console.log(docRef);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log("Effect called");
    getPosts();
  }, []);

  return (
    <div className="home-container">
      <Posts
        data={postLists}
        isAuth={isAuth}
        deletePost={deletePost}
        addToFavorites={addToFavorites}
      ></Posts>
    </div>
  );
};

export default Home;
