import React, { useEffect, useState } from 'react';
import StoryItem from '../components/StoryItem';
import SearchBox from '../components/SearchBox';
import SkeletonPlaceholder from '../components/SkeletonPlaceholder';

const TopStories = () => {
  const [stories, setStories] = useState([]);
  const [filteredStories, setFilteredStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopStories = async () => {
      try {
        const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
        const storyIds = await response.json();
        const top100Ids = storyIds.slice(0, 100);
        const storyPromises = top100Ids.map(id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res => res.json()));
        const stories = await Promise.all(storyPromises);
        setStories(stories);
        setFilteredStories(stories);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching top stories:', error);
      }
    };

    fetchTopStories();
  }, []);

  const handleSearch = (query) => {
    const filtered = stories.filter(story => story.title.toLowerCase().includes(query.toLowerCase()));
    setFilteredStories(filtered);
  };

  if (loading) {
    return <SkeletonPlaceholder />;
  }

  return (
    <div>
      <SearchBox onSearch={handleSearch} />
      <div className="story-list">
        {filteredStories.map(story => (
          <StoryItem key={story.id} title={story.title} score={story.score} url={story.url} />
        ))}
      </div>
    </div>
  );
};

export default TopStories;