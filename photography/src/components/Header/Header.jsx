import React from "react";
import "./Header.css";
import pano1 from "../../assets/pano1.jpg";

const reactDescriptions = ["Travel", "Landscape", "Sports"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <h1>Jordan Urbany Photography</h1>
      <p>{description} Photography </p>
      <img src={pano1} alt="pano1" className="fullWidthImage" />
    </header>
  );
}
