// src/components/header/Header.jsx
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import GalleryDropdown from "./GalleryDropdown";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white p-4  p-4 pb6 pt-6 mb-6">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-center flex-grow">
          <Link to="/" className="text-6xl font-semibold font-fancy">
            Urbany Photography
          </Link>
        </div>
        <div className="flex space-x-4 items-center">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/prints" className="hover:underline">
            Prints
          </Link>
          <div className="relative group">
            <button
              className="flex items-center focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              Gallery
              <svg
                className={`w-5 h-5 ml-2 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <Transition
              show={isOpen}
              enter="transition ease-out duration-300"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-200"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              {(ref) => (
                <div
                  ref={ref}
                  className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-20"
                >
                  <GalleryDropdown onClick={() => setIsOpen(false)} />
                </div>
              )}
            </Transition>
          </div>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
