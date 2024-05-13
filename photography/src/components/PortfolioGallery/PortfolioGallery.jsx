import PortfolioGalleryStyles from "./PortfolioGallery.css";
import { PORTFOLIO_SELECT } from "../PortfolioSelect";

// export default function PortfolioGallery({ image, title, description }) {
//   return (
//     <li>
//       <img src={image} alt={title} />
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </li>
//   );
// }
export default function PortfolioGallery() {
  return (
    <ul className="gallery-container">
      {PORTFOLIO_SELECT.map((item, index) => (
        <li className="gallery-item" key={index}>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  );
}
