import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const handlePostClick = (slug) => {
    navigate(`/posts/${slug}`);
  };

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => setPosts(data));
  }, []);
  console.log(posts);
  if (posts.length === 0) {
    return <p>No posts available.</p>;
  }

  return (
    <div className="posts">
      <h3>POSTS:</h3>
      {posts.map((post, index) => (
        <div
          className="post"
          key={index}
          onClick={() => handlePostClick(post.slug)}
        >
          <p>
            <strong>{post.title}</strong>
          </p>
          <p>{post.username}</p>
          <p>{post.description}</p>
          {post.imageUrl ? (
            <img src={post.imageUrl} width="500" height="500" />
          ) : null}
          <br />
          <button>UP</button>
          <button>DOWN</button>
        </div>
      ))}
    </div>
  );
}
