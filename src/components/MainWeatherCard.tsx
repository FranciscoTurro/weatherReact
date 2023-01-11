import { uppercase } from '../util/utilFunctions';

interface Props {
  mainTemp: number;
  minTemp: number;
  maxTemp: number;
  iconID: string;
  description: string;
  cityName: string;
  country: string;
}

export const MainWeatherCard: React.FC<Props> = ({
  mainTemp,
  cityName,
  country,
  description,
  iconID,
  maxTemp,
  minTemp,
}) => {
  return (
    <div className="flex flex-col items-center mt-20">
      <h5 className="text-7xl font-semibold">{`${Math.round(mainTemp)} C°`}</h5>
      <img
        className="w-44 h-44"
        src={`http://openweathermap.org/img/wn/${iconID}@2x.png`}
        alt={description}
      />
      <div className="flex flex-col gap-3 items-center">
        <h5 className="mb-1 text-4xl font-medium pb-2">
          {uppercase(description)}
        </h5>
        <span className="text-2xl">{`${cityName}, ${country}`}</span>
        <div className="flex space-x-3 mt-4 gap-12">
          <div className="flex flex-col items-center">
            <h5 className="text-xl">{`${Math.round(minTemp)} C°`}</h5>
            <h5>Min</h5>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="text-xl">{`${Math.round(maxTemp)} C°`}</h5>
            <h5>Max</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
