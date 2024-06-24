import React from "react";
import { useNavigate } from "react-router-dom";
import "./PortfolioSelect.css";

function PortfolioSelect({ image, title, link }) {
  const navigate = useNavigate();

  const navigateToPage = () => {
    navigate(link);
  };
  return (
    <li onClick={navigateToPage} className="portfolio-item">
      <img src={image} alt={title} className="portfolio-image" />
      <h3 className="portfolio-title">{title}</h3>
    </li>
  );
}
export default PortfolioSelect;
