export const fetchCityName = async (coordinates: {
  latitude: number;
  longitude: number;
}) => {
  const response = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${coordinates.latitude}+${coordinates.longitude}&key=28d78b45dd72440eb7e41c836c972512`
  );
  const data = await response.json();
  return data;
};
