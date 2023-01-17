import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full bg-custom_heavy_gray shadow md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm sm:text-center ">
        ©2023 Francisco Turró. No Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm  sm:mt-0">
        <li>
          <Link
            to={'/FAQ'}
            className='className="mr-4 hover:underline md:mr-6 "'
          >
            FAQ
          </Link>
        </li>
        <li>
          <Link
            to={'/about'}
            className='className="mr-4 hover:underline md:mr-6 "'
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to={'/contact'}
            className='className="mr-4 hover:underline md:mr-6 "'
          >
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
};
