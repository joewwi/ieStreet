import React, { useState } from 'react';
import Comment from './Comment';
import 'boxicons';

function News({ article, setIsLiked, isLiked }) {
  const { id, title, news, image, likes } = article;
  const [comments, setComments] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  const handleLike = () => {
    fetch(`http://localhost:9292/news/${id}/like`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // Update the like count in your component state or do something with the response data
        console.log(data); // Example: Log the response data
        setIsLiked(!isLiked);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleViewComments = () => {
    fetch(`http://localhost:9292/news/comments/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // Update the comments state with the fetched comments
        setComments(data);
        setIsLiked(!isLiked)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log(comments);

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-news">{news}</p>
      </div>
      <button className="like" onClick={handleLike}>
        <i className="bx bxs-like bx-tada"></i>Likes: {likes}
      </button>
      <button
        className="comment"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleViewComments}
      >
        <i className="bx bxs-message-square-dots bx-tada"></i>View Comments
      </button>
      {/* Render the comments if the button is hovered */}
      {isHovered && (
        <div>
          {comments.map((comment) => {
            console.log(comment);
            return <Comment comment={comment}/>
          })}
        </div>
      )}
    </div>
  );
}

export default News;
