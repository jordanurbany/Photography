import React from "react";
import PortfolioSelect from "./PortfolioSelect";
import "./PortfolioSelect.css";

import VietnamImg from "../../assets/MainPagePortfolio/DSC07742.jpg";
import ThailandImg from "../../assets/MainPagePortfolio/DSC09934.jpg";
import LaosImg from "../../assets/MainPagePortfolio/DSC02647.jpg";
import IndoImg from "../../assets/MainPagePortfolio/DSC06801.jpg";

function PortfolioGallery() {
  const portfolioImages = [
    {
      image: VietnamImg,
      title: "VietnamImg",
      description: "tra su bird santuary",
      link: "/portfolio/Vietnam",
    },
    {
      image: ThailandImg,
      title: "ThailandImg",
      description: "Religh Beach",
      link: "/portfolio/Thailand",
    },
    {
      image: LaosImg,
      title: "LaosImg",
      description: "Top of Ridge Laos",
      link: "/portfolio/Laos",
    },
    {
      image: IndoImg,
      title: "IndoImg",
      description: "Lances Left",
      link: "/Portfolio/Indonesia",
    },
  ];
  return (
    <>
      <div className="text-center">
        <h1 className="text-6xl font bold mb-8 mt-12">Portfolio Gallery</h1>
        <p className="text-sm mb-8">
          Welcome to the portfolio gallery. Explore the different collections
          and enjoy the visual journey.
        </p>
        <ul className="portfolio-list">
          {portfolioImages.map((item, index) => (
            <PortfolioSelect
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
export default PortfolioGallery;
