import React from "react";

const FullScreenImage = ({ src, alt, onClose }) => {
  console.log("FullScreenImage src:", src);
  console.log("FullScreenImage alt:", alt);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-[90vw] max-h-[90vh]">
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-full object-contain"
          style={{ display: "block" }}
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default FullScreenImage;
