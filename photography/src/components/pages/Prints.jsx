import React, { useState } from "react";
import PanoImg1 from "../../assets/pano/pano1.jpg";
import PanoImg2 from "../../assets/pano/pano14.jpg";
import PanoImg3 from "../../assets/pano/pano15.jpg";
import PanoImg4 from "./prints/pano4 (1).jpg";
import PanoImg5 from "./prints/pano4 (2).jpg";
import PanoImg6 from "./prints/pano4 (3).jpg";
import PanoImg7 from "./prints/pano4 (4).jpg";
import PanoImg8 from "./prints/pano4 (5).jpg";
import PanoImg9 from "./prints/pano4 (6).jpg";
import PanoImg10 from "./prints/pano4 (7).jpg";
import PanoImg11 from "./prints/pano4 (8).jpg";
import PanoImg12 from "./prints/pano4 (9).jpg";
import FullScreenImage from "./FullScreenImage";

const imgs = [
  { id: 1, src: PanoImg1, title: "Old Bagan 'Girl in the Red Dress'" },
  { id: 2, src: PanoImg7, title: "'First Light' Bagan" },
  { id: 3, src: PanoImg3, title: "Ban Gioc" },
  { id: 4, src: PanoImg9, title: "Ballons in Bagan" },
  { id: 5, src: PanoImg5, title: "Kepler Track" },
  { id: 6, src: PanoImg6, title: "Ha Long Bay " },
  { id: 7, src: PanoImg2, title: "Milford Sound" },
  { id: 8, src: PanoImg8, title: "Old Bagan 'Look back'" },
  { id: 9, src: PanoImg4, title: "Queenstown" },
  { id: 10, src: PanoImg10, title: "Vang Vieng" },
  { id: 11, src: PanoImg11, title: "Dong Van" },
  { id: 12, src: PanoImg12, title: "Mt Cook Glacier" },
];

const PrintsToCart = ({ addToCart }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Most Purchased Prints
      </h1>
      <div className="grid grid-cols-1 gap-4 text-center">
        {imgs.map((picture) => (
          <div key={picture.id} className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={picture.src}
              alt={picture.title}
              className="w-full h-auto mb-2 object cover"
              onClick={() => setSelectedImage(picture)}
            />
            <h2 className="text-xl font bold">{picture.title}</h2>
            <button
              className="mt-2 bg-blue-500 text-white p-2 rounded"
              onClick={() => addToCart(picture)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {selectedImage && (
        <FullScreenImage
          src={selectedImage.src}
          alt={selectedImage.title}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default PrintsToCart;
