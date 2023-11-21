import React, { useState } from 'react';

const Comment = () => {
  // State to hold comments
  const [comments, setComments] = useState([]);
  // State to hold the current comment being typed
  const [newComment, setNewComment] = useState('');

  // Function to add a new comment
  const addComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div>
      <h2 className="font-mono text-xl pb-2">Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <div>
        <textarea
          rows="4"
          cols="50"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Leave a helpful suggestion..."
        />
        <button onClick={addComment} className="font-mono bg-slate-600 text-white rounded-lg px-2 py-1 mb-2 shadow-md">Comment</button>
      </div>
    </div>
  );
};

export default Comment;
