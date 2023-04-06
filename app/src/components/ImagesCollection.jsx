import React from "react";

export const ImagesCollection = () => {
  const imagesList = [...new Array(2)].map(
    (number, index) => `/images/nzPhotos/nzphotos/DSC00465${index + 1}.jpg`
  );
  return (
    <ul className="images-collection-container">
      {imagesList.map((imgUrl, index) => {
        return (
          <li key={index} className="item">
            <figure>
              <img src={imgUrl} alt="collection" />
            </figure>
          </li>
        );
      })}
    </ul>
  );
};

export default ImagesCollection;
