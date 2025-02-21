// useGeolocation.jsx (För att hantera användarens plats (auto location))
import { useState, useEffect } from 'react';

const useGeolocation = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (err) => setError(err.message)
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  return { location, error };
};

export default useGeolocation;
