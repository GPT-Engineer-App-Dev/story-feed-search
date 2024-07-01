import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl">Welcome to Hacker News Top Stories</h1>
      <p>Click below to view the top 100 stories from Hacker News.</p>
      <Link to="/top-stories" className="text-blue-500 underline">
        View Top Stories
      </Link>
    </div>
  );
};

export default Index;