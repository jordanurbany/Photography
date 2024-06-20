// src/components/galleries/GalleryButton.jsx
import React from "react";
import { useParams } from "react-router-dom";

const GalleryButton = () => {
  const { galleryName } = useParams();

  const renderGalleryContent = (name) => {
    switch (name) {
      case "gallery1":
        return <div>Gallery 1 Content</div>;
      case "gallery2":
        return <div>Gallery 2 Content</div>;
      case "gallery3":
        return <div>Gallery 3 Content</div>;
      default:
        return <div>Unknown Gallery</div>;
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">
        {galleryName.replace("gallery", "Gallery ")}
      </h2>
      {renderGalleryContent(galleryName)}
    </div>
  );
};

export default GalleryButton;
