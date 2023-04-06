import React from "react";

import React from "react";

export const ImagesCollection = () => {
  const imagesList = [...new Array(9)].map(
    (number, index) => `/images/image-${index + 1}.jpg`
  );
  return <div>ImagesCollection</div>;
};
