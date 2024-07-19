import React from "react";
import GalleryLayout from "./GalleryLayout";
import Nica1 from "./nicaragua/Nica (1).jpeg";
import Nica2 from "./nicaragua/Nica (2).jpeg";
import Nica3 from "./nicaragua/Nica (3).jpeg";
import Nica4 from "./nicaragua/Nica (4).jpeg";
import Nica5 from "./nicaragua/Nica (5).jpeg";
import Nica6 from "./nicaragua/Nica (6).jpeg";
import Nica7 from "./nicaragua/Nica (7).jpeg";
import Nica8 from "./nicaragua/Nica (8).jpeg";
import Nica9 from "./nicaragua/Nica (9).jpeg";
import Nica10 from "./nicaragua/Nica (10).jpeg";
import Nica11 from "./nicaragua/Nica (11).jpeg";
import Nica12 from "./nicaragua/Nica (12).jpeg";
import Nica13 from "./nicaragua/Nica (13).jpeg";
import Nica14 from "./nicaragua/Nica (14).jpeg";
import Nica15 from "./nicaragua/Nica (15).jpeg";
import Nica16 from "./nicaragua/Nica (16).jpeg";
import Nica17 from "./nicaragua/Nica (17).jpeg";
import Nica18 from "./nicaragua/Nica (18).jpeg";
import Nica19 from "./nicaragua/Nica (19).jpeg";
import Nica20 from "./nicaragua/Nica (20).jpeg";
import Nica21 from "./nicaragua/Nica (21).jpeg";
import Nica22 from "./nicaragua/Nica (22).jpeg";
import Nica23 from "./nicaragua/Nica (23).jpeg";
import Nica24 from "./nicaragua/Nica (24).jpeg";
import Nica25 from "./nicaragua/Nica (25).jpeg";
import Nica26 from "./nicaragua/Nica (26).jpeg";
import Nica27 from "./nicaragua/Nica (27).jpeg";
import Nica28 from "./nicaragua/Nica (28).jpeg";
import Nica29 from "./nicaragua/Nica (29).jpeg";
import Nica30 from "./nicaragua/Nica (30).jpeg";
import Nica31 from "./nicaragua/Nica (31).jpeg";
import Nica32 from "./nicaragua/Nica (32).jpeg";
import Nica33 from "./nicaragua/Nica (33).jpeg";
import Nica34 from "./nicaragua/Nica (34).jpeg";
import Nica35 from "./nicaragua/Nica (35).jpeg";
import Nica36 from "./nicaragua/Nica (36).jpeg";
import Nica37 from "./nicaragua/Nica (37).jpeg";
import Nica38 from "./nicaragua/Nica (38).jpeg";
import Nica39 from "./nicaragua/Nica (39).jpeg";
import Nica40 from "./nicaragua/Nica (40).jpeg";
import Nica41 from "./nicaragua/Nica (41).jpeg";
import Nica42 from "./nicaragua/Nica (42).jpeg";
import Nica43 from "./nicaragua/Nica (43).jpeg";
import Nica44 from "./nicaragua/Nica (44).jpeg";
import Nica45 from "./nicaragua/Nica (45).jpeg";
import Nica46 from "./nicaragua/Nica (46).jpeg";
import Nica47 from "./nicaragua/Nica (47).jpeg";
import Nica48 from "./nicaragua/Nica (48).jpeg";
import Nica49 from "./nicaragua/Nica (49).jpeg";
import Nica50 from "./nicaragua/Nica (50).jpeg";
import Nica51 from "./nicaragua/Nica (51).jpeg";
import Nica52 from "./nicaragua/Nica (52).jpeg";
import Nica53 from "./nicaragua/Nica (53).jpeg";
import Nica54 from "./nicaragua/Nica (54).jpeg";
import Nica55 from "./nicaragua/Nica (55).jpeg";
import Nica56 from "./nicaragua/Nica (56).jpeg";
import Nica57 from "./nicaragua/Nica (57).jpeg";
import Nica58 from "./nicaragua/Nica (58).jpeg";
import Nica59 from "./nicaragua/Nica (59).jpeg";
import Nica60 from "./nicaragua/Nica (60).jpeg";
import Nica61 from "./nicaragua/Nica (61).jpeg";
import Nica62 from "./nicaragua/Nica (62).jpeg";

const horizontalPhotos = [
  //photo paths
  Nica1,
  Nica2,
  Nica3,
  Nica4,
  Nica5,
  Nica6,
  Nica7,
  Nica8,
  Nica9,
  Nica10,
  Nica11,
  Nica12,
  Nica17,
  Nica18,
  Nica19,
  Nica20,
  Nica21,
  Nica22,
  Nica23,
  Nica24,
  Nica25,
  Nica26,
  Nica27,
  Nica28,
  Nica29,
  Nica30,
  Nica31,
  Nica32,
  Nica33,
  Nica34,
  Nica35,
  Nica36,
  Nica37,
  Nica38,
  Nica39,
  Nica40,
  Nica41,
  Nica42,
  Nica43,
  Nica44,
  Nica45,
  Nica46,
  Nica47,
  Nica48,
  Nica49,
  Nica50,
  Nica51,
  Nica52,
  Nica53,
  Nica54,
  Nica55,
  Nica56,
  Nica57,
  Nica58,
  Nica59,
  Nica60,
  Nica61,
  Nica62,
];
const verticalPhotos = [Nica13, Nica14, Nica15, Nica16, Nica61, Nica62];

const NicaraguaGallery = () => {
  const photos = [
    ...horizontalPhotos.map((photo) => ({ src: photo, type: "horizontal" })),
    ...verticalPhotos.map((photo) => ({ src: photo, type: "vertical" })),
  ];
  return <GalleryLayout title="Nicaragua" photos={photos} />;
};

export default NicaraguaGallery;
