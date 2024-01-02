import React, { useEffect, useState } from "react";
import axios from "axios";
function Post(props) {
  const [posts, setPosts] = useState([]);

  //   const getPosts = () => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((response) => response.json())
  //       .then((json) => {
  //         setposts(json);
  //       });
  //   };

  const getPosts = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    } catch (error) {
      console.log("««««« error »»»»»", error);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container">
      <ol>
        {posts.length > 0 && posts.map((p) => <li key={p.id}>{p.title}</li>)}
      </ol>
    </div>
  );
}

export default Post;
