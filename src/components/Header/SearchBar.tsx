import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchBar: React.FC = () => {
  const navigate = useNavigate();

  const [state, setState] = useState('');

  return (
    <form
      className="w-1/4"
      onSubmit={(e) => {
        e.preventDefault();
        const city = state.replace(/\s+/g, '+');
        navigate(`/search/${city}`);
        setState('');
      }}
    >
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 dark:text-custom_gray-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          onChange={(e) => setState(e.target.value)}
          value={state}
          type="search"
          autoComplete="off"
          id="default-search"
          className="block w-full p-4 pl-10 text-md rounded-lg bg-custom_gray-200 dark:bg-custom_gray-700"
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-custom_red hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2 "
        >
          Search
        </button>
      </div>
    </form>
  );
};
