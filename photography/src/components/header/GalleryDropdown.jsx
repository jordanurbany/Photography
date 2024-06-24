import React from "react";
import { Link } from "react-router-dom";

const GalleryDropdown = ({ onClick }) => {
  const handleClick = (galleryName) => {
    console.log(`${galleryName} clicked`);
    onClick(); // Close the dropdown
  };

  return (
    <div className="bg-gray-800 text-white rounded-md shadow-lg w-48">
      <Link
        to="/gallery/indonesia"
        className="block px-4 py-2 hover:bg-gray-700"
        onClick={() => handleClick("Indonesia")}
      >
        Indonesia
      </Link>
      <Link
        to="/gallery/laos"
        className="block px-4 py-2 hover:bg-gray-700"
        onClick={() => handleClick("Laos")}
      >
        Laos
      </Link>
      <Link
        to="/gallery/new-zealand"
        className="block px-4 py-2 hover:bg-gray-700"
        onClick={() => handleClick("New Zealand")}
      >
        New Zealand
      </Link>
      <Link
        to="/gallery/myanmar"
        className="block px-4 py-2 hover:bg-gray-700"
        onClick={() => handleClick("Myanmar")}
      >
        Myanmar
      </Link>
      <Link
        to="/gallery/nicaragua"
        className="block px-4 py-2 hover:bg-gray-700"
        onClick={() => handleClick("Nicaragua")}
      >
        Nicaragua
      </Link>
      <Link
        to="/gallery/pacific-northwest"
        className="block px-4 py-2 hover:bg-gray-700"
        onClick={() => handleClick("Pacific Northwest")}
      >
        Pacific Northwest
      </Link>
      <Link
        to="/gallery/thailand"
        className="block px-4 py-2 hover:bg-gray-700"
        onClick={() => handleClick("Thailand")}
      >
        Thailand
      </Link>
      <Link
        to="/gallery/vietnam"
        className="block px-4 py-2 hover:bg-gray-700"
        onClick={() => handleClick("Vietnam")}
      >
        Vietnam
      </Link>
    </div>
  );
};

export default GalleryDropdown;
