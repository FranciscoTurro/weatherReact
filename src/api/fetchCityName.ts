export const fetchCityName = async (coordinates: {
  latitude: number;
  longitude: number;
}) => {
  const response = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${coordinates.latitude}+${
      coordinates.longitude
    }&key=${import.meta.env.VITE_GEOCODING_API_KEY}`
  );
  const data = await response.json();
  return data;
};
