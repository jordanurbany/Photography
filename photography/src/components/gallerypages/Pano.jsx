import React from "react";

const Pano = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">Pano Photos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Add images or content for Gallery 1 here */}
        <div className="bg-gray-200 p-4">Image 1</div>
        <div className="bg-gray-200 p-4">Image 2</div>
        <div className="bg-gray-200 p-4">Image 3</div>
      </div>
    </div>
  );
};
