import React from "react";

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "20vh",
    width: "100%",
  };
  return (
    <footer className="bg-dark text-light pt-3 pb-2" style={footerStyle}>
      <p className="text-center">Copyright &copy; AttaWeb.com</p>
    </footer>
  );
};
