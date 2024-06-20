import React from "react";
import Header from "../header/Header";

const Layout = ({ children }) => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <main>{children}</main>
    </div>
  );
};
export default Layout;
