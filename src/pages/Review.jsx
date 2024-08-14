import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Review() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/posts?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => setPost(data[0]));
  }, [slug]);

  if (!post) {
    return <p>Post not found...</p>;
  }

  return (
    <div className="review">
      <div className="post">
        <p>
          <strong>{post.title}</strong>
        </p>
        <p>{post.username}</p>
        <p>{post.description}</p>
        {post.imageUrl && <img src={post.imageUrl} width="500" height="500" />}
        <br />
        <button>UP</button>
        <button>DOWN</button>
      </div>
      <div className="your-comment">
        <p>Enter Comment:</p>
        <input type="text" placeholder="Your comment..." />
        <button>Submit</button>
      </div>
      <div className="other-comments">
        <p>Comments:</p>
        <br />
        {post.comments &&
        Array.isArray(post.comments) &&
        post.comments.length > 0 ? (
          post.comments.map((comment, index) => (
            <div key={index} className="comment">
              <p>
                {comment.cmt_user}: {comment.cmt_desc}
              </p>
            </div>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
}
