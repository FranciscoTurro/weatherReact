import { useContext } from 'react';
import { Context } from '../../context/Context';

export const MeasurementButton = () => {
  const appContext = useContext(Context);

  const color = appContext!.isMetric ? 'blue' : 'red';

  return (
    <button
      onClick={appContext!.toggleUnitSystem}
      type="button"
      className={`text-white bg-${color}-700 hover:bg-${color}-800 focus:ring-4 focus:ring-${color}-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none`}
    >
      {appContext!.isMetric ? 'Metric' : 'Imperial'}
    </button>
  );
};
