import { useState } from 'react';

interface Props {
  setParentState: (argument: string) => void;
}

export const SearchBar: React.FC<Props> = ({
  setParentState: handleSubmit,
}) => {
  const [state, setState] = useState('');

  return (
    <div className="flex flex-col items-center p-2">
      <form
        className="w-1/3"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(state);
          setState('');
        }}
      >
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-black"
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
            className="block w-full p-4 pl-10 text-sm text-black rounded-lg bg-white"
            placeholder="Find a city"
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 "
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};