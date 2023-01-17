export const fetchCity = async (
  cityName: string,
  dataType: 'weather' | 'forecast',
  isMetric: boolean
) => {
  const system = isMetric ? 'metric' : 'imperial';

  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/${dataType}?q=${cityName}&units=${system}&appid=c59d34581182187599601a68c72dcacd`
  );
  const data = await response.json();
  return data;
};
