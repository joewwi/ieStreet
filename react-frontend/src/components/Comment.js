import React from 'react';
import '../css/comment.css'

const Comment = ({ comment, author }) => {
    
    return (
        <div className="comment">
            <p className="comment-text">{comment}</p>
            <p className="comment-author">- {author}</p>
        </div>
    );
};

export default Comment;
