import React from 'react';
import './FavoritePlaces.css';

const FavoritePlaces = ({ favorites, onRemoveFavorite, onSelectLocation }) => {
  return (
    <div className="favorite-places">
      <h3>Favoritplatser</h3>
      <div className="favorites-list">
        {favorites.map((place, index) => (
          <div key={index} className="favorite-item">
            <span onClick={() => onSelectLocation(place)}>{place}</span>
            <button onClick={() => onRemoveFavorite(place)}>Ta bort</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritePlaces;