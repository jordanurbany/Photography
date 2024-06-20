import React from "react";

const Button = ({ children, className, onClick }) => {
  return (
    <button className={`btn btn-ghost ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
