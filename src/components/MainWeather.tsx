import { useQuery } from 'react-query';
import { fetchCity } from '../api/fetchCity';
import { BarLoader } from 'react-spinners';
import { MainWeatherCard } from './MainWeatherCard';

interface Props {
  city: string;
  system: 'metric' | 'imperial';
}

export const MainWeather: React.FC<Props> = ({ city, system }) => {
  const { data, isLoading } = useQuery(
    [city, system],
    () => fetchCity(city, 'weather', system),
    {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    }
  );

  if (isLoading)
    return (
      <div className="flex flex-col items-center pt-16">
        <BarLoader color="red" />
      </div>
    );
  if (data.cod !== 200) return null;

  const {
    sys: { sunrise, sunset, country },
    name,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    weather: [{ description, icon }],
  } = data;

  return (
    <div className="flex gap-72 justify-center">
      <MainWeatherCard
        cityName={name}
        country={country}
        description={description}
        iconID={icon}
        mainTemp={temp}
        maxTemp={temp_max}
        minTemp={temp_min}
      />
    </div>
  );
};
