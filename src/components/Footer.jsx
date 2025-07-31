import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="flex flex-wrap justify-center mt-10 pt-10 text-center">
      © {year} Saroj Subedi
    </div>
  );
};

export default Footer;
