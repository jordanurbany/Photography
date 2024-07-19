import React from "react";
import GalleryLayout from "./GalleryLayout";
import PNW_1 from "./pacificNorthWest/PNW (1).jpg";
import PNW_2 from "./pacificNorthWest/PNW (2).jpg";
import PNW_3 from "./pacificNorthWest/PNW (3).jpg";
import PNW_4 from "./pacificNorthWest/PNW (4).jpg";
import PNW_5 from "./pacificNorthWest/PNW (5).jpg";
import PNW_6 from "./pacificNorthWest/PNW (6).jpg";
import PNW_7 from "./pacificNorthWest/PNW (7).jpg";
import PNW_8 from "./pacificNorthWest/PNW (8).jpg";
import PNW_9 from "./pacificNorthWest/PNW (9).jpg";
import PNW_10 from "./pacificNorthWest/PNW (10).jpeg";

const horizontalPhotos = [
  PNW_1,
  PNW_2,
  PNW_3,
  PNW_6,
  PNW_7,
  PNW_8,
  PNW_9,
  PNW_10,
];
const panoPhotos = [PNW_4, PNW_5];

const PacificNorthwestGallery = () => {
  const photos = [
    ...horizontalPhotos.map((photo) => ({ src: photo, type: "horizontal" })),
    //...verticalPhotos.map((photo) => ({ src: photo, type: "vertical" })),
    ...panoPhotos.map((photo) => ({ src: photo, type: "pano" })),
  ];
  return <GalleryLayout title="Pacific North West" photos={photos} />;
};

export default PacificNorthwestGallery;
