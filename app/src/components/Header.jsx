import React from "react";

export const Header = ({ navBarOpen, setNavbarOpen }) => {
  return (
    <div>
      <button
        className={navBarOpen ? "menu-btn expanded" : "menu-btn"}
        onClick={() => setNavbarOpen((prevNavbarOpen) => !prevNavbarOpen)}
      >
        <div className="menu-icon-container">
          <span class="icon-line"></span>
          <span class="icon-line"></span>
          <span class="icon-line"></span>
        </div>
      </button>
    </div>
  );
};
