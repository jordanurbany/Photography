import React from "react";
import { PORTFOLIO_SELECT } from "./components/PortfolioSelect.jsx";
import Header from "./components/Header/Header.jsx";
import PortfolioGallery from "./components/PortfolioGallery/PortfolioGallery.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="PortfolioSelect">
          <h2>Portfolios</h2>
          <ul>
            <PortfolioGallery {...PORTFOLIO_SELECT[0]} />
            <PortfolioGallery {...PORTFOLIO_SELECT[1]} />
            <PortfolioGallery {...PORTFOLIO_SELECT[2]} />
            <PortfolioGallery {...PORTFOLIO_SELECT[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
