import React, { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase-config";
const Home = ({ isAuth }) => {
  const [postLists, setPostLists] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  useEffect(() => {
    console.log("Effect called");
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostLists(
        data.docs.map((post) => ({
          ...post.data(),
          id: post.id,
        }))
      );
    };
    getPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {postLists.map((post) => (
          <div>
            <p>{post.title}</p>{" "}
            {isAuth && post.author.id === auth.currentUser.uid && (
              <span onClick={deletePost(post.id)}>Delete</span>
            )}
            <p>{post.text}</p>
            <p>{post.author.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
