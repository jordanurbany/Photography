import React from "react";
import AboutMeImg from "../../assets/aboutMePhoto/aboutMe.jpeg";

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-5xl font-bold mb-20">Jordan Urbany</h1>
      <img
        src={AboutMeImg}
        alt="Jordan"
        className="w-[400px] h-[400px] rounded-full object-cover"
      />
      <p className="text-center max-w-md mt-10">
        I enjoy photography as a hobby and capturing the beauty of the world. I
        enjoy surfing and shooting landscapes, aiming to tell stories through my
        lens. Welcome to my portfolio, where you can check out my work from
        various adventures and travels.
      </p>
    </div>
  );
};

export default AboutMe;
