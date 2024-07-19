// VietnamGallery.jsx
import React from "react";
import GalleryLayout from "./GalleryLayout";
import Vietnam_1 from "./vietnamPhotos/Vietnam (1).jpg";
import Vietnam_2 from "./vietnamPhotos/Vietnam (2).jpg";
import Vietnam_3 from "./vietnamPhotos/Vietnam (3).jpg";
import Vietnam_4 from "./vietnamPhotos/Vietnam (4).jpg";
import Vietnam_5 from "./vietnamPhotos/Vietnam (5).jpg";
import Vietnam_6 from "./vietnamPhotos/Vietnam (6).jpg";
import Vietnam_7 from "./vietnamPhotos/Vietnam (7).jpg";
import Vietnam_8 from "./vietnamPhotos/Vietnam (8).jpg";
import Vietnam_9 from "./vietnamPhotos/Vietnam (9).jpg";
import Vietnam_10 from "./vietnamPhotos/Vietnam (10).jpg";
import Vietnam_11 from "./vietnamPhotos/Vietnam (11).jpg"; // Adding incrementally
import Vietnam_12 from "./vietnamPhotos/Vietnam (12).jpg"; // Adding incrementally
import Vietnam_13 from "./vietnamPhotos/Vietnam (13).jpg"; // Adding incrementally

const horizontalPhotos = [
  Vietnam_1,
  Vietnam_2,
  Vietnam_3,

  Vietnam_5,
  Vietnam_6,
  Vietnam_7,
  Vietnam_8,
  Vietnam_10,
  Vietnam_12, // Adding incrementally
  Vietnam_13, // Adding incrementally
];
const panoPhotos = [Vietnam_4, Vietnam_9, Vietnam_11];

const VietnamGallery = () => {
  const photos = [
    ...horizontalPhotos.map((photo) => ({ src: photo, type: "horizontal" })),
    //...verticalPhotos.map((photo) => ({ src: photo, type: "vertical" })),
    ...panoPhotos.map((photo) => ({ src: photo, type: "pano" })),
  ];
  return <GalleryLayout title="Vietnam" photos={photos} />;
};

export default VietnamGallery;
