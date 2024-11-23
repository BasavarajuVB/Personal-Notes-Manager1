import React from 'react';
import "./styles.css"

const CATEGORIES = [
  'All', 'Work', 'Personal', 'Study', 'Shopping', 'Health',
  'Finance', 'Travel', 'Projects', 'Goals', 'Ideas',
  'Reminders', 'Meetings', 'Events', 'Books', 'Movies',
  'Music', 'Recipes', 'Quotes', 'Journal', 'Others'
];

const SearchBar = ({ searchTerm, setSearchTerm, currentCategory, setCurrentCategory }) => {
  return (
    <div className="flex space-x-4">
      <input
        type="text"
        placeholder="Search notes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-4 py-2 border rounded w-64"
      />
      <select
        value={currentCategory}
        onChange={(e) => setCurrentCategory(e.target.value)}
        className="px-4 py-2 border rounded"
      >
        {CATEGORIES.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchBar;