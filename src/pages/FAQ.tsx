import { useState } from 'react';

export const FAQ = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  return (
    <div className="text-center pt-10">
      <h1 className="text-6xl">Frequently Asked Questions</h1>
      <div className="p-10">
        <button
          onClick={() => setIsOpen1(!isOpen1)}
          type="button"
          className="border-gray-200 bg-custom_gray-200 hover:bg-custom_gray-100 dark:bg-custom_gray-800 dark:hover:bg-custom_gray-700 dark:border-gray-700 flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 rounded-t-xl"
        >
          <span>What was this site built with?</span>
          <svg
            className={`w-6 h-6 ${isOpen1 ? 'rotate-180' : ''} shrink-0`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className={isOpen1 ? '' : 'hidden'}>
          <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 ">
              The site was programmed with Typescript. Frontend was made with
              React, and styled with Tailwind CSS. There is no backend to this
              site, as the weather information is fetched from the OpenWeather
              API, using React Query.
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen2(!isOpen2)}
          type="button"
          className="border-gray-200 bg-custom_gray-200 hover:bg-custom_gray-100 dark:bg-custom_gray-800 dark:hover:bg-custom_gray-700 dark:border-gray-700 flex items-center justify-between w-full p-5 font-medium text-left border border-b-0"
        >
          <span>First non-existant filler question</span>
          <svg
            className={`w-6 h-6 ${isOpen2 ? 'rotate-180' : ''} shrink-0`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className={isOpen2 ? '' : 'hidden'}>
          <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 ">
              What a question! Unfortunately, it would take me ages to answer,
              so we'll just leave it at that.
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen3(!isOpen3)}
          type="button"
          className="border-gray-200 bg-custom_gray-200 hover:bg-custom_gray-100 dark:bg-custom_gray-800 dark:hover:bg-custom_gray-700 dark:border-gray-700 flex items-center justify-between w-full p-5 font-medium text-left border border-b-0"
        >
          <span>Second non-existant filler question</span>
          <svg
            className={`w-6 h-6 ${isOpen3 ? 'rotate-180' : ''} shrink-0`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className={isOpen3 ? '' : 'hidden'}>
          <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 ">I plead the fifth.</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen4(!isOpen4)}
          type="button"
          className="border-gray-200 bg-custom_gray-200 hover:bg-custom_gray-100 dark:bg-custom_gray-800 dark:hover:bg-custom_gray-700 dark:border-gray-700 flex items-center justify-between w-full p-5 font-medium text-left border"
        >
          <span>Third non-existant filler question</span>
          <svg
            className={`w-6 h-6 ${isOpen4 ? 'rotate-180' : ''} shrink-0`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className={isOpen4 ? '' : 'hidden'}>
          <div className="p-5 font-light border border-gray-200 dark:border-gray-700">
            <p className="mb-2 ">I'm starting to get uncomfortable here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
