import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full p-4 md:p-6 flex flex-col md:flex-row justify-between items-center z-20 bg-black bg-opacity-60 hidden md:flex">
      <div className="text-2xl font-bold">Madan Bhat</div>
      <div className="mt-4 md:mt-0 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
        <a
          href="#projects"
          className="hover:text-gray-300 transition duration-300 text-lg md:text-base"
        >
          Projects
        </a>
        <a
          href="#about"
          className="hover:text-gray-300 transition duration-300 text-lg md:text-base"
        >
          About
        </a>
        <a
          href="#contact"
          className="hover:text-gray-300 transition duration-300 text-lg md:text-base"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
