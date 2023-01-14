import { useQuery } from 'react-query';
import { fetchCity } from '../../api/fetchCity';
import { BarLoader } from 'react-spinners';
import { MainWeatherCard } from './MainWeatherCard';
import { uppercase } from '../../util/utilFunctions';
import { SecondaryInfo } from './SecondaryInfo';
import { Context } from '../../context/Context';
import { useContext } from 'react';
import { Forecast } from './Forecast';

interface Props {
  city: string;
}

export const Weather: React.FC<Props> = ({ city }) => {
  const appContext = useContext(Context);

  const { data, isLoading } = useQuery(
    [`${city}-weather`, appContext!.isMetric],
    () => fetchCity(city, 'weather', appContext!.isMetric),
    {
      refetchOnWindowFocus: false,
      staleTime: 600000,
    }
  );

  if (isLoading)
    return (
      <div className="flex flex-col items-center pt-16">
        <BarLoader color="red" />
      </div>
    );
  if (parseInt(data.cod) !== 200)
    return (
      <div className="flex flex-col items-center pt-16 text-7xl">
        {uppercase(data.message)}
      </div>
    );

  const {
    sys: { country },
    name,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    weather: [{ description, icon }],
  } = data;

  return (
    <div className="">
      <div className="flex justify-center gap-40 p-20">
        <MainWeatherCard
          cityName={name}
          country={country}
          description={description}
          iconID={icon}
          mainTemp={temp}
          maxTemp={temp_max}
          minTemp={temp_min}
        />
        <SecondaryInfo
          feelsLike={feels_like}
          humidity={humidity}
          pressure={pressure}
          windSpeed={speed}
        />
      </div>
      <Forecast city={city} />
    </div>
  );
};
