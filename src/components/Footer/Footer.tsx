export const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full bg-custom_heavy_gray shadow md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm sm:text-center ">
        ©2023 Francisco Turró. No Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm  sm:mt-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">
            About
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            FAQ
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            thikasdf
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            asdfasdf
          </a>
        </li>
      </ul>
    </footer>
  );
};
