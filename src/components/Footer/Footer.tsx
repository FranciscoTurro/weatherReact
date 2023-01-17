import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full flex items-center justify-between p-6">
      <span className="text-sm">
        ©2023 Francisco Turró. No Rights Reserved.
      </span>
      <ul className="flex flex-wrap gap-5 items-center mt-3 text-sm">
        <li>
          <Link to={'/FAQ'} className="mr-4 hover:underline">
            FAQ
          </Link>
        </li>
        <li>
          <Link to={'/about'} className="mr-4 hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link to={'/contact'} className="mr-4 hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
};
