interface Props {
  humidity: string;
  feelsLike: number;
  windSpeed: number;
  pressure: number;
}

export const SecondaryInfo: React.FC<Props> = ({
  feelsLike,
  humidity,
  pressure,
  windSpeed,
}) => {
  return (
    <div className="bg-white text-black flex items-center mt-20 mb-20 p-10 pb-20 rounded-lg">
      <div className="text-2xl grid grid-cols-2 gap-12 h-min">
        <div className="text-center ">
          <h5>Humidity:</h5>
          <h5>{`${humidity}%`}</h5>
        </div>
        <div className="text-center">
          <h5>Feels like:</h5>
          <h5>{`${Math.round(feelsLike)} C°`}</h5>
        </div>
        <div className="text-center">
          <h5>Wind speed:</h5>
          <h5>{`${windSpeed} km/h`}</h5>
        </div>
        <div className="text-center">
          <h5>Pressure:</h5>
          <h5>{`${pressure / 1000} atm`}</h5>
        </div>
      </div>
    </div>
  );
};
