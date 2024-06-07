import React from "react";
import MyanmarImg from "../../assets/pano1.jpg";

const reactDescriptions = ["Travel", "Landscape", "Sports"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <h1>Jordan Urbany Photography</h1>
      <p>{description} Photography </p>
      <div className="image-container">
        <img src={MyanmarImg} alt="pano1" className="fullWidthImage" />
      </div>
    </header>
  );
}

export default Header;
