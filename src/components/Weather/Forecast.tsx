import { useContext } from 'react';
import { useQuery } from 'react-query';
import { json } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import { fetchCity } from '../../api/fetchCity';
import { Context } from '../../context/Context';
import { uppercase } from '../../util/utilFunctions';

interface Props {
  city: string;
}

export const Forecast: React.FC<Props> = ({ city }) => {
  const appContext = useContext(Context);

  const { data, isLoading } = useQuery(
    [`${city}-forecast`, appContext!.isMetric],
    () => fetchCity(city, 'forecast', appContext!.isMetric),
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

  interface Forecast {
    dt: number;
    main: {
      temp_min: number;
      temp_max: number;
    };
    weather: [
      {
        description: string;
      }
    ];
  }
  interface ForecastData {
    list: Forecast[];
  }
  interface FiveDayForecast {
    date: Date;
    temp_min: number;
    temp_max: number;
    description: string;
  }

  const getFiveDayForecast = (
    forecastData: ForecastData
  ): FiveDayForecast[] => {
    const dailyForecast: FiveDayForecast[] = [];

    forecastData.list.forEach((forecast) => {
      const forecastDate = new Date(forecast.dt * 1000);

      let existingForecast = dailyForecast.find((dailyForecast) => {
        const isSameDay =
          dailyForecast.date.getDate() === forecastDate.getDate();
        const isSameMonth =
          dailyForecast.date.getMonth() === forecastDate.getMonth();
        const isSameYear =
          dailyForecast.date.getFullYear() === forecastDate.getFullYear();
        return isSameDay && isSameMonth && isSameYear;
      });

      if (!existingForecast) {
        existingForecast = {
          date: forecastDate,
          temp_min: forecast.main.temp_min,
          temp_max: forecast.main.temp_max,
          description: forecast.weather[0].description,
        };
        dailyForecast.push(existingForecast);
      } else {
        existingForecast.temp_min = Math.min(
          existingForecast.temp_min,
          forecast.main.temp_min
        );
        existingForecast.temp_max = Math.max(
          existingForecast.temp_max,
          forecast.main.temp_max
        );
        existingForecast.description = forecast.weather[0].description;
      }
    });

    return dailyForecast;
  };

  const fiveDayForecast = getFiveDayForecast(data);

  return (
    <div>
      {fiveDayForecast.map((item) => {
        return <div>{JSON.stringify(item)}</div>;
      })}
    </div>
  );
};
