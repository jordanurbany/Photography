import React from "react";
import { useParams } from "react-router-dom";

const GalleryButton = () => {
  const { galleryName } = useParams();

  const renderGalleryContent = (name) => {
    switch (name) {
      case "indonesia":
        return <div>Indonesia Content</div>;
      case "laos":
        return <div>Laos Content</div>;
      case "new-zealand":
        return <div>New Zealand Content</div>;
      case "myanmar":
        return <div>Myanmar Content</div>;
      case "nicaragua":
        return <div>Nicaragua Content</div>;
      case "pacific-northwest":
        return <div>Pacific Northwest Content</div>;
      case "thailand":
        return <div>Thailand Content</div>;
      case "vietnam":
        return <div>Vietnam Content</div>;
      default:
        return <div>Unknown Gallery</div>;
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4 capitalize">
        {galleryName.replace("-", " ")}
      </h2>
      {renderGalleryContent(galleryName)}
    </div>
  );
};

export default GalleryButton;
