import React from "react";
import GalleryLayout from "./GalleryLayout";
import IndoImg2 from "./indonesiaPhotos/nias1.jpg";
import IndoImg3 from "./indonesiaPhotos/yoyos1.jpg";

const photos = [
  //photo paths
  IndoImg2,
  IndoImg3,
];

const IndonesiaGallery = () => {
  console.log("GalleryLayout photos", photos);
  return <GalleryLayout title="Indonesia" photos={photos} />;
};

export default IndonesiaGallery;
