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
      title: "Vietnam",
      description: "tra su bird santuary",
      link: "/gallery/vietnam",
    },
    {
      image: ThailandImg,
      title: "Thailand",
      description: "Religh Beach",
      link: "/gallery/thailand",
    },
    {
      image: LaosImg,
      title: "Laos",
      description: "Top of Ridge Laos",
      link: "/gallery/laos",
    },
    {
      image: IndoImg,
      title: "Indonesia",
      description: "Lances Left",
      link: "/gallery/indonesia",
    },
  ];
  return (
    <>
      <div className="text-center">
        <h1 className="text-6xl font bold mb-8 mt-12">Portfolio Gallery</h1>
        <p className="text-m mb-10">
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
