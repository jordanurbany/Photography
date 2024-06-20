// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Header from "./components/header/Header";
import PortfolioGallery from "./components/portfolioSelect/PortfolioGallery";
import PortfolioSelect from "./components/portfolioSelect/PortfolioSelect";
import LandPagePano from "./components/landPagePano/LandPagePano";
import GalleryButton from "./components/header/GalleryButton";

function App() {
  return (
    <Router>
      <Layout>
        <div className="bg-black min-h-screen text-white">
          <LandPagePano />
          <main>
            <Routes>
              <Route path="/" element={<PortfolioGallery />} />
              <Route path="/portfolio/:country" element={<PortfolioSelect />} />
              {/* Route for dynamic galleries */}
              <Route path="/gallery/:galleryName" element={<GalleryButton />} />
            </Routes>
          </main>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
