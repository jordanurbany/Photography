import PortfolioGalleryStyles from "./PortfolioGallery.css";

export default function PortfolioGallery({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
