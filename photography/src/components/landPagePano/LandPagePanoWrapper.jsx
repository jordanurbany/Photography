import React from "react";
import { useLocation } from "react-router-dom";
import LandPagePano from "./LandPagePano";

function LandPagePanoWrapper() {
  const location = useLocation();
  const showLandPagePano = location.pathname === "/";

  return showLandPagePano && <LandPagePano />;
}

export default LandPagePanoWrapper;
