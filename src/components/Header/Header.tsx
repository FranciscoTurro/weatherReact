import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/Context';
import { SearchBar } from './SearchBar';

export const Header = () => {
  const appContext = useContext(Context);

  const navigate = useNavigate();

  return (
    <div className="flex items-center p-2 justify-evenly">
      <button
        onClick={() => navigate('/')}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
      >
        <svg
          className="w-4 h-4 mr-2 -ml-1"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        Home
      </button>
      <SearchBar />
      <button
        onClick={appContext!.toggleUnitSystem}
        type="button"
        className={
          appContext!.isMetric
            ? 'w-24 text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none'
            : 'w-24 text-white bg-red-700 hover:bg-red-900 focus:ring-4 focus:ring-red-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none'
        }
      >
        {appContext!.isMetric ? 'Metric' : 'Imperial'}
      </button>{' '}
    </div>
  );
};
