import React from "react";
import GalleryLayout from "./GalleryLayout";
import Laos_1 from "./laosPhotos/Laos (1).jpg";
import Laos_2 from "./laosPhotos/Laos (2).jpg";
import Laos_3 from "./laosPhotos/Laos (3).jpg";
import Laos_4 from "./laosPhotos/Laos (4).jpg";
import Laos_5 from "./laosPhotos/Laos (5).jpg";
import Laos_6 from "./laosPhotos/Laos (6).jpg";
import Laos_7 from "./laosPhotos/Laos (7).jpg";

const horizontalPhotos = [Laos_1, Laos_2, Laos_3, Laos_4];
//const verticalPhotos = [];
const panoPhotos = [Laos_5, Laos_6, Laos_7];

const LaosGallery = () => {
  const photos = [
    ...horizontalPhotos.map((photo) => ({
      src: photo,
      type: "horizontal",
    })),
    // ...verticalPhotos.map((photo) => ({
    //   src: photo,
    //   type: "vertical",
    //})),
    ...panoPhotos.map((photo) => ({ src: photo, type: "pano" })),
  ];
  return <GalleryLayout title="Laos" photos={photos} />;
};

export default LaosGallery;
