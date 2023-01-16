import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../../context/Context';
import { SearchBar } from './SearchBar';
import { SpeedDial } from './SpeedDial';

export const Header = () => {
  const appContext = useContext(Context);

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex items-center p-2 justify-evenly">
      {location.pathname !== '/home' ? (
        <button
          onClick={() => navigate('/')}
          className="text-white bg-custom_red hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
        >
          Home
          <svg
            className="w-4 h-4 ml-2 -mr-1"
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
        </button>
      ) : (
        <div className="w-24"></div>
      )}
      <SearchBar />
      <SpeedDial />
    </div>
  );
};
