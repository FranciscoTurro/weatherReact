import { unixToHours } from '../util/utilFunctions';

interface Props {
  sunrise: number;
  sunset: number;
}

export const Sun_rise_set: React.FC<Props> = ({ sunrise, sunset }) => {
  return (
    <div className="bg-white text-black flex items-center mt-20 mb-20 p-10 pb-20 rounded-lg">
      <div className="text-2xl flex gap-12 h-min">
        <div className="text-center ">
          <h5>Sunrise:</h5>
          <h5>{`${unixToHours(sunrise)}`}</h5>
        </div>
        <div className="text-center ">
          <h5>Sunset:</h5>
          <h5>{`${unixToHours(sunset)}`}</h5>
        </div>
      </div>
    </div>
  );
};
