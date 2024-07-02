import React from "react";
import GalleryLayout from "./GalleryLayout";
import IndoImg2 from "./indonesiaPhotos/nias1.jpg";
import IndoImg3 from "./indonesiaPhotos/yoyos1.jpg";
import Boat from "./indonesiaPhotos/Boat.jpg";
import Scarecrows from "./indonesiaPhotos/Scarecrows.jpg";

const photos = [
  //photo paths
  IndoImg2,
  IndoImg3,
  Boat,
  Scarecrows,
];

const IndonesiaGallery = () => {
  console.log("GalleryLayout photos", photos);
  return <GalleryLayout title="Indonesia" photos={photos} />;
};

export default IndonesiaGallery;
