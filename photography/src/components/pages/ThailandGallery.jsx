import React from "react";
import GalleryLayout from "./GalleryLayout";
import Thailand_1 from "./thailandPhotos/Thailand (1).jpg";
import Thailand_2 from "./thailandPhotos/Thailand (2).jpg";
import Thailand_3 from "./thailandPhotos/Thailand (3).jpg";
import Thailand_4 from "./thailandPhotos/Thailand (4).jpg";

const horizontalPhotos = [Thailand_1, Thailand_2, Thailand_3, Thailand_4];

const ThailandGallery = () => {
  const photos = [
    ...horizontalPhotos.map((photo) => ({ src: photo, type: "horizontal" })),
    //...verticalPhotos.map((photo) => ({ src: photo, type: "vertical" })),
    //...panoPhotos.map((photo) => ({ src: photo, type: "pano" })),
  ];
  return <GalleryLayout title="Thailand" photos={photos} />;
};

export default ThailandGallery;
