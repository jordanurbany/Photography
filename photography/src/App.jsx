// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./components/shoppingCart/CartContext";
import Layout from "./components/layout/Layout";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import PortfolioGallery from "./components/portfolioSelect/PortfolioGallery";
import PortfolioSelect from "./components/portfolioSelect/PortfolioSelect";
import LandPagePano from "./components/landPagePano/LandPagePano";
import LandPagePanoWrapper from "./components/landPagePano/LandPagePanoWrapper";
import GalleryButton from "./components/header/GalleryButton";
import IndonesiaGallery from "./components/pages/IndonesiaGallery";
import NewZealandGallery from "./components/pages/NewZealandGallery";
import NicaraguaGallery from "./components/pages/NicaraguaGallery.jsx";
import PacificNorthwestGallery from "./components/pages/PacificNorthWestGallery.jsx";
import MyanmarGallery from "./components/pages/MyanmarGallery.jsx";
import LaosGallery from "./components/pages/LaosGallery.jsx";
import ThailandGallery from "./components/pages/ThailandGallery.jsx";
import VietnamGallery from "./components/pages/VietnamGallery";
import About from "./components/about/About";
import ContactPage from "./components/contact/ContactPage";
import PrintsToCart from "./components/pages/Prints";

function App() {
  return (
    <Router>
      <Layout>
        <div className="bg-black min-h-screen text-white">
          <LandPagePanoWrapper />
          <main>
            <Routes>
              <Route path="/" element={<PortfolioGallery />} />
              <Route path="/portfolio/:country" element={<PortfolioSelect />} />
              <Route path="/gallery/indonesia" element={<IndonesiaGallery />} />
              <Route path="/gallery/myanmar" element={<MyanmarGallery />} />
              <Route path="/gallery/laos" element={<LaosGallery />} />
              <Route path="/gallery/thailand" element={<ThailandGallery />} />
              <Route path="/gallery/Vietnam" element={<VietnamGallery />} />
              <Route
                path="/gallery/pacific-northwest"
                element={<PacificNorthwestGallery />}
              />
              <Route
                path="/gallery/new-zealand"
                element={<NewZealandGallery />}
              />
              <Route path="/gallery/nicaragua" element={<NicaraguaGallery />} />
              {/* Route for dynamic galleries */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/prints" element={<PrintsToCart />} />
              <Route path="/gallery/:galleryName" element={<GalleryButton />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Layout>
    </Router>
  );
}

export default App;
