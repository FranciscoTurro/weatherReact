import { useQuery } from 'react-query';
import { fetchCity } from '../api/fetchCity';
import { BarLoader } from 'react-spinners';

interface Props {
  city: string;
  system: 'metric' | 'imperial';
}

export const Weather: React.FC<Props> = ({ city, system }) => {
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
        <BarLoader color="white" />
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
    <div className="flex flex-col items-center pt-16 ">
      <p>{temp}</p>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <p>{description}</p>
      <p>{`${name}, ${country}`}</p>
      <div className="flex gap-4">
        <div className="text-center">
          <p>{temp_max}</p>
          <p>Max temp</p>
        </div>
        <div className="text-center">
          <p>{temp_min}</p>
          <p>Min temp</p>
        </div>
      </div>
    </div>
  );
};
