import React from "react";

export const MenuOverlay = ({ navbarOpen, setNavBarOpen }) => {
  return (
    <nav className={`menu-container ${navbarOpen ? "expanded" : ""}`}>
      <ul className="menu-list">
        <li className="nav-li">
          <a href="/" className="nav-link" onClick={() => setNavBarOpen(false)}>
            Home
          </a>
        </li>
        <li className="nav-li">
          <a href="/" className="nav-link" onClick={() => setNavBarOpen(false)}>
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuOverlay;
