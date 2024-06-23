// src/components/header/GalleryDropdown.jsx
import React from "react";
import { Link } from "react-router-dom";

const GalleryDropdown = ({ onClick }) => {
  return (
    <div className="absolute hidden bg-gray-800 text-white mt-2 rounded-md shadow-lg w-36 group-hover:block">
      <Link
        to="/gallery/gallery1"
        className="block px-4 py-2 hover:bg-gray-700"
        onClick={onClick}
      >
        Indonesia
      </Link>
      <Link
        to="/gallery/gallery2"
        className="block px-4 py-2 hover:bg-gray-700"
        onClick={onClick}
      >
        Laos
      </Link>
      <Link
        to="/gallery/gallery2"
        className="block px-4 py-2 hover:bg-gray-700"
        onClick={onClick}
      >
        New Zealand
      </Link>
      <Link
        to="/gallery/gallery3"
        className="block px-4 py-2 hover:bg-gray-700"
        onClick={onClick}
      >
        Myanmar
      </Link>
      <Link
        to="/gallery/gallery3"
        className="block px-4 py-2 hover:bg-gray-700"
        onClick={onClick}
      >
        Nicaragua
      </Link>
      <Link
        to="/gallery/gallery2"
        className="block px-4 py-2 hover:bg-gray-700"
        onClick={onClick}
      >
        Pacific Northwest
      </Link>
      <Link
        to="/gallery/gallery3"
        className="block px-4 py-2 hover:bg-gray-700"
        onClick={onClick}
      >
        Thailand
      </Link>
      <Link
        to="/gallery/gallery2"
        className="block px-4 py-2 hover:bg-gray-700"
        onClick={onClick}
      >
        Vietnam
      </Link>
    </div>
  );
};

export default GalleryDropdown;
