import React, { useState, useEffect } from "react";
import MyanmarImg from "../../assets/pano/pano1.jpg";
import MilfordImg from "../../assets/pano/pano14.jpg";
import BanGiocImg from "../../assets/pano/pano15.jpg";
import "./LandPagePano.css";

const images = [MyanmarImg, MilfordImg, BanGiocImg];

function LandPagePano() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [leavingImageIndex, setLeavingImageIndex] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = images.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
      });
    });
    Promise.all(preloadImages).then(() => {
      setImagesLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (imagesLoaded) {
      const interval = setInterval(() => {
        setLeavingImageIndex(currentImageIndex);
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [imagesLoaded, currentImageIndex]);

  if (!imagesLoaded) {
    return <div>Loading...</div>; // Display a loading message or spinner while images load
  }

  return (
    <div className="image-container">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`pano${index + 1}`}
          className={`fullWidthImage 
                        ${currentImageIndex === index ? "visible" : "hidden"} 
                        ${leavingImageIndex === index ? "hidden-leaving" : ""}`}
        />
      ))}
    </div>
  );
}

export default LandPagePano;
