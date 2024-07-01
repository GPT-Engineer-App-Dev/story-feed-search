import React from 'react';

const StoryItem = ({ title, score, url }) => {
  return (
    <div className="story-item">
      <h2>{title}</h2>
      <p>{score} upvotes</p>
      <a href={url} target="_blank" rel="noopener noreferrer">Read more</a>
    </div>
  );
};

export default StoryItem;