// App.jsx
import React, { useState, useEffect } from 'react';
import WeatherCard from './components/WeatherCard';
import WeatherForecast from './components/WeatherForecast';
import WeatherDetail from './components/WeatherDetail';
import WeatherSearch from './components/WeatherSearch';
import FavoritePlaces from './components/FavoritePlaces';
import './styles.css';  // Importera CSS-stilar
import useGeolocation from './components/Location';

const App = () => {
  // Hämta platsen från localStorage, annars använd 'Stockholm'
  const savedLocation = localStorage.getItem('location') || 'Stockholm';
  const [location, setLocation] = useState(savedLocation);

  const [favorites, setFavorites] = useState(() => {
    // Hämta favoritplatser från localStorage, eller en tom array om inga finns.
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    // Uppdatera localStorage när favoritplatser ändras.
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleSearch = (query) => {
    setLocation(query);
  };

  const handleAddFavorite = (newFavorite) => {
    if (!favorites.includes(newFavorite)) {
      const updatedFavorites = [...favorites, newFavorite];
      setFavorites(updatedFavorites);
    }
  };

  return (
    <div>
      <WeatherSearch onSearch={handleSearch} />
      <WeatherCard location={location} />
      <WeatherForecast location={location} />
      <WeatherDetail location={location} />
      <button onClick={() => handleAddFavorite(location)}>
        Add to Favorites
      </button>
      <FavoritePlaces favorites={favorites} />
    </div>
  );
};

export default App;
