import React from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaCopyright,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-4">
          <a
            href="mailto:jordanurbany@gmail.com"
            className="mx-2 p-2 rounded-full bg-black hover:bg-gray-600"
            aria-label="Contact Email"
          >
            <FaEnvelope size={28} />
          </a>
          <a
            href="https://www.instagram.com/jordanurbany/"
            className="mx-2 p-2 rounded-full bg-black hover:bg-gray-600"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://www.facebook.com/jordanurbany/"
            className="mx-2 p-2 rounded-full bg-black hover:bg-gray-600"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={28} />
          </a>
        </div>
        <div className="mb-4">
          <p className="text-lg">Thank you for your time</p>
        </div>
        <div className="text-sm text-gray-400 flex justify-center items-center">
          <FaCopyright className="mr-1" />
          <span>2024 Jordan Urbany Photography. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
