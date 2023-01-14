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

  const temperatureMeasurement = appContext!.isMetric ? 'C°' : 'F°';

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
        icon: string;
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
    iconID: string;
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
          iconID: forecast.weather[0].icon,
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
    <div className="flex justify-center gap-14 text-sm">
      {fiveDayForecast.map((item) => {
        return (
          <div
            key={item.date.toString()}
            className="bg-black text-white border-white border-2 w-32 h-28 rounded-lg flex flex-col items-center"
          >
            <h5>
              {item.date.toLocaleDateString('en-UK', {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit',
              })}
            </h5>
            <div className="text-md flex gap-1 justify-center">
              <h5>{`${Math.round(item.temp_min)}`} Min</h5>
              <h5>{`${Math.round(item.temp_max)}`} Max</h5>
            </div>
            <img
              className="w-10"
              src={`http://openweathermap.org/img/wn/${item.iconID}@2x.png`}
              alt={item.description}
            />
            <h5>{uppercase(item.description)}</h5>
          </div>
        );
      })}
    </div>
  );
};
