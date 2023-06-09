import React from 'react';
import '../css/comment.css'

const Comment = ({ text, author }) => {
    return (
        <div className="comment">
            <p className="comment-text">{text}</p>
            <p className="comment-author">- {author}</p>
        </div>
    );
};

export default Comment;
