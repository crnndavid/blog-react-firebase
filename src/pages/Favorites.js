import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import Posts from "../components/Posts";
const Favorites = ({ isAuth }) => {
  const [favoritePosts, setFavoritePosts] = useState([]);

  const favoritesPostRef = query(
    collection(db, "posts"),
    where("favorites", "==", true)
  );

  const getFavoritePosts = async () => {
    try {
      const data = await getDocs(favoritesPostRef);
      console.log(data);
      setFavoritePosts(
        data.docs.map((post) => ({
          ...post.data(),
          id: post.id,
        }))
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("Effect called");
    getFavoritePosts();
  }, []);

  return (
    <div>
      <h1>Favorites</h1>
      {<Posts data={favoritePosts} isAuth={isAuth}></Posts>}
    </div>
  );
};

export default Favorites;
