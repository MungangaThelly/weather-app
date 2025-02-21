// FavoritePlaces.jsx För att hantera favoritplatser
import React from 'react';

const FavoritePlaces = ({ favorites }) => {
  return (
    <div>
      <h2>Favorite Places</h2>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((place, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  // När en favoritplats klickas på, sätt den som aktuell plats
                  window.location.reload(); // Ladda om sidan för att uppdatera vädret
                  localStorage.setItem('location', place);
                }}
              >
                {place}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite places saved yet!</p>
      )}
    </div>
  );
};

export default FavoritePlaces;
