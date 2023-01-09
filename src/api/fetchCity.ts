export const fetchCity = async (cityName: string) => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
