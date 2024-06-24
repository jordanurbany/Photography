import React, { useState } from "react";
import FullScreenImage from "./FullScreenImage";

const GalleryLayout = ({ title, photos }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  console.log("GalleryLayout photos:", photos);
  console.log("Selected image:", selectedImage);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative cursor-pointer"
            onClick={() => setSelectedImage(photo)}
          >
            <img
              src={photo}
              alt={`${title} ${index + 1}`}
              className="w-full h-auto block"
            />
            <div className="absolute inset-0 bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 flex items-end justify-center">
              <p className="text-white text-lg font-semibold p-4 transform translate-y-full hover:translate-y-0 transition-all duration-300">
                {`${title} ${index + 1}`}
              </p>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <FullScreenImage
          src={selectedImage}
          alt={title}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default GalleryLayout;
