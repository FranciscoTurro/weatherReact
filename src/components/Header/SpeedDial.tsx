import { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/Context';

export const SpeedDial = () => {
  const appContext = useContext(Context);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const handleClick = (event: MouseEvent) => {
    if (
      (event.target as Element).closest('button') ||
      (event.target as Element).closest('#speed-dial-menu-top-right')
    )
      return;

    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white flex items-center justify-center bg-custom_red rounded-full w-14 h-14 hover:bg-red-800  focus:ring-4 focus:ring-red-800 focus:outline-none "
      >
        <svg
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>
      <div
        id="speed-dial-menu-top-right"
        className={`absolute flex flex-col items-center ${
          isOpen ? '' : 'hidden'
        } mt-4 space-y-2`}
      >
        <button
          onClick={appContext!.toggleTheme}
          className="flex justify-center items-center w-[52px] h-[52px] bg-custom_gray-200 dark:bg-custom_gray-700 rounded-full border border-none shadow-sm hover:bg-custom_gray-100 dark:hover:bg-custom_gray-600"
        >
          {appContext!.isLightMode ? (
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          ) : (
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          )}
        </button>

        <button
          onClick={appContext!.toggleUnitSystem}
          className="flex justify-center items-center w-[52px] h-[52px] bg-custom_gray-200 dark:bg-custom_gray-700 rounded-full border border-none shadow-sm hover:bg-custom_gray-100 dark:hover:bg-custom_gray-600"
        >
          {appContext!.isMetric ? (
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 12h7v2h-7v7h-2V8a4 4 0 0 1 4-4h7v2h-7a2 2 0 0 0-2 2v4zm-7.5-2a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm0-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            </svg>
          ) : (
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path d="M4.5 10a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm0-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM22 10h-2a4 4 0 1 0-8 0v5a4 4 0 1 0 8 0h2a6 6 0 1 1-12 0v-5a6 6 0 1 1 12 0z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};
