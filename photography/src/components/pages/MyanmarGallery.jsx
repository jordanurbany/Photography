import React from "react";
import GalleryLayout from "./GalleryLayout";
import Myanmar_1 from "./myanmarPhotos/Myanmar (1).jpg";
import Myanmar_2 from "./myanmarPhotos/Myanmar (2).jpg";
import Myanmar_3 from "./myanmarPhotos/Myanmar (3).jpg";
import Myanmar_4 from "./myanmarPhotos/Myanmar (4).jpg";
import Myanmar_5 from "./myanmarPhotos/Myanmar (5).jpg";
import Myanmar_6 from "./myanmarPhotos/Myanmar (6).jpg";
import Myanmar_7 from "./myanmarPhotos/Myanmar (7).jpg";
import Myanmar_8 from "./myanmarPhotos/Myanmar (8).jpg";
import Myanmar_9 from "./myanmarPhotos/Myanmar (9).jpg";
import Myanmar_10 from "./myanmarPhotos/Myanmar (10).jpg";

const horizontalPhotos = [
  Myanmar_1,
  Myanmar_2,
  Myanmar_3,
  Myanmar_4,
  Myanmar_5,
  Myanmar_6,
  Myanmar_7,
];
//const verticalPhotos = [];
const panoPhotos = [Myanmar_8, Myanmar_9, Myanmar_10];

const MyanmarGallery = () => {
  const photos = [
    ...horizontalPhotos.map((photo) => ({ src: photo, type: "horizontal" })),
    //...verticalPhotos.map((photo) => ({ src: photo, type: "vertical" })),
    ...panoPhotos.map((photo) => ({ src: photo, type: "pano" })),
  ];
  return <GalleryLayout title="Myanmar" photos={photos} />;
};

export default MyanmarGallery;
