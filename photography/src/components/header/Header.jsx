import React, { useRef, useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import GalleryDropdown from "./GalleryDropdown";
import Urbany from "../../assets/logo/urbany.jpg";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Close the dropdown when the location changes
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <header className="bg-black text-white p-4 pb-6 pt-6 mb-6 relative z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-left flex-grow">
          <Link
            to="/"
            className="inline-block transition-all duration-300 ease-in-out"
            onClick={() => console.log("logo clicked")}
          >
            <img
              src={Urbany}
              alt="Urbany Photography Logo"
              className="w-[650px] h-[125px] object-contain transition-all duration-300 ease-in-out hover:scale-110 hover:brightness-125"
            />
          </Link>
        </div>
        <div className="flex space-x-1 items-center">
          <Link
            to="/"
            className="transform transition-transform duration-200 ease-in-out hover:scale-105 hover:text-shadow-darkOrange hover:text-darkOrange text-2xl py-4 px-4 mt-6"
            onClick={() => console.log("home clicked")}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="transform transition-transform duration-200 ease-in-out hover:scale-105 hover:text-shadow-darkOrange hover:text-darkOrange text-2xl py-4 px-4 mt-6"
            onClick={() => console.log("about clicked")}
          >
            About
          </Link>
          <Link
            to="/prints"
            className="transform transition-transform duration-200 ease-in-out hover:scale-105 hover:text-shadow-darkOrange hover:text-darkOrange text-2xl py-4 px-4 mt-6"
            onClick={() => console.log("Prints clicked")}
          >
            Prints
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button
              className="transform transition-transform duration-200 ease-in-out hover:scale-105 hover:text-shadow-darkOrange hover:text-darkOrange flex items-center focus:outline-none text-2xl px-4 mt-6"
              onClick={() => {
                setIsOpen(!isOpen);
                console.log("gallery clicked");
              }}
            >
              Gallery
              <svg
                className={`w-6 h-6 ml-2 transition-transform duration-200 ${
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
              <div className="absolute right-0 mt-2 w-48">
                <GalleryDropdown onClick={() => setIsOpen(false)} />
              </div>
            </Transition>
          </div>
          <Link
            to="/contact"
            className="transform transition-transform duration-200 ease-in-out hover:scale-105 hover:text-shadow-darkOrange hover:text-darkOrange text-2xl py-4 px-4 mt-6"
            onClick={() => console.log("contact clicked")}
          >
            Contact
          </Link>
          <Link
            to="/cart"
            className="transform transition-transform duration-200 ease-in-out hover:scale-105 hover:text-shadow-darkOrange hover:text-darkOrange text-2xl py-4 px-4 mt-6"
            onClick={() => console.log("cart clicked")}
          >
            <FaShoppingCart className="w-8 h-8" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
