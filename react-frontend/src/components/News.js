import React, { useState } from 'react';
import 'boxicons';

function News({ article }) {
  const { id, title, news, image, likes } = article;
  const [comments, setComments] = useState([]);
  const [isLiked, setIsLiked] = useState(false);

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
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="card">
      <img
        src="https://s.yimg.com/uu/api/res/1.2/n27EsyOoj7ioKWSU9mIl1A--~B/Zmk9ZmlsbDtoPTUwNTtweW9mZj0wO3E9OTU7dz05MDA7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/os/creatr-uploaded-images/2023-06/24fbeec0-0496-11ee-8fff-ade2069bb77c"
        alt={title}
        className="card-image"
      />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-news">{news}</p>
      </div>
      <button className="like" onClick={handleLike}>
        <i className="bx bxs-like bx-tada"></i>Likes: {likes}
      </button>
      <button className="comment" onMouseOver={handleViewComments}>
        <i className="bx bxs-message-square-dots bx-tada"></i>View Comments
      </button>
      {/* Render the comments */}
      <div>
        {comments.map((comment) => {
          return <p key={comment.id}>{comment.text}</p>;
        })}
      </div>
    </div>
  );
}

export default News;
