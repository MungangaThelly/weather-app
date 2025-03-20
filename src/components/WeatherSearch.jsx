// WeatherSearch.jsx För att söka efter olika platser
import React, { useState } from 'react';
import './WeatherSearch.css';

const WeatherSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Sök efter en plats"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Sök</button>
    </form>
  );
};

export default WeatherSearch;