import React from 'react';

const SearchBox = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search stories..."
      onChange={handleInputChange}
      className="search-box"
    />
  );
};

export default SearchBox;