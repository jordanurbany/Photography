import React from "react";
import GalleryLayout from "./GalleryLayout";
import IndoImg2 from "./indonesiaPhotos/nias1.jpg";
import IndoImg3 from "./indonesiaPhotos/yoyos1.jpg";
import Boat from "./indonesiaPhotos/Boat.jpg";
import Scarecrows from "./indonesiaPhotos/Scarecrows.jpg";

const horizontalPhotos = [
  //photo paths
  IndoImg2,
  IndoImg3,
  Boat,
  Scarecrows,
];
const verticalPhotos = [];
const panoPhotos = [];

const IndonesiaGallery = () => {
  const photos = [
    ...horizontalPhotos.map((photo) => ({ src: photo, type: "horizontal" })),
    ...verticalPhotos.map((photo) => ({ src: photo, type: "vertical" })),
    ...panoPhotos.map((photo) => ({ src: photo, type: "pano" })),
  ];
  return <GalleryLayout title="Indonesia" photos={photos} />;
};

export default IndonesiaGallery;
