export const fetchCity = async (
  cityName: string,
  dataType: 'weather' | 'forecast',
  system: 'metric' | 'imperial'
) => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/${dataType}?q=${cityName}&units=${system}&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }`
  );
  console.log(
    `http://api.openweathermap.org/data/2.5/${dataType}?q=${cityName}&units=${system}&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }`
  );
  const data = await response.json();
  return data;
};
