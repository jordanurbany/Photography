import React, { UseState } from "react";
import PanoImg1 from "../../assets/pano/pano1.jpg";
import PanoImg2 from "../../assets/pano/pano14.jpg";
import PanoImg3 from "../../assets/pano/pano15.jpg";
import PanoImg4 from "./prints/pano4 (1).jpg";
import PanoImg5 from "./prints/pano4 (2).jpg";
import PanoImg6 from "./prints/pano4 (3).jpg";
import PanoImg7 from "./prints/pano4 (4).jpg";
import PanoImg8 from "./prints/pano4 (5).jpg";
import PanoImg9 from "./prints/pano4 (6).jpg";
import PanoImg10 from "./prints/pano4 (7).jpg";
import PanoImg11 from "./prints/pano4 (8).jpg";
import PanoImg12 from "./prints/pano4 (9).jpg";

const imgs = [
  { id: 1, src: PanoImg1, title: "Picture 1" },
  { id: 2, src: PanoImg7, title: "Picture 7" },
  { id: 3, src: PanoImg3, title: "Picture 3" },
  { id: 4, src: PanoImg9, title: "Picture 9" },
  { id: 4, src: PanoImg5, title: "Picture 5" },
  { id: 4, src: PanoImg6, title: "Picture 6" },
  { id: 4, src: PanoImg2, title: "Picture 2" },
  { id: 4, src: PanoImg8, title: "Picture 8" },
  { id: 4, src: PanoImg4, title: "Picture 4" },
  { id: 4, src: PanoImg10, title: "Picture 10" },
  { id: 4, src: PanoImg11, title: "Picture 11" },
  { id: 4, src: PanoImg12, title: "Picture 12" },
];

const PrintsToCart = ({ addToCart }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Most Purchased Prints
      </h1>
      <div className="grid grid-cols-1 gap-4">
        {imgs.map((picture) => (
          <div key={picture.id} className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={picture.src}
              alt={picture.title}
              className="w-full h-auto mb-2 object cover"
            />
            <h2 className="text-xl font bold">{picture.title}</h2>
            <button
              className="mt-2 bg-blue-500 text-white p-2 rounded"
              onClick={() => addToCart(picture)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrintsToCart;
