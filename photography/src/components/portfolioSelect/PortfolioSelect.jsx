import React from "react";
import { useNavigate } from "react-router-dom";
import "./PortfolioSelect.css";

function PortfolioSelect({ image, title, description, link }) {
  const navigate = useNavigate();

  const navigateToPage = () => {
    navigate(link);
  };
  return (
    <li onClick={navigateToPage} className="portfolio-item">
      <img src={image} alt={title} className="portfolio-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
export default PortfolioSelect;
