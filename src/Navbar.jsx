import React from "react";
import "./Navbar.css"; // Import your CSS file for styling

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <img src="https://creative-ishi.myshopify.com/cdn/shop/files/Group_3_1_large.png?v=1680153387" alt="img" />
      </div>
      <div className=" mid-fonts">
        <span>TerraCotta</span>
        <span>Gallery</span>
        <span>Included Pages</span>
        <span>About us</span>
        <span>Blog</span>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Search</a></li>
        <li><a href="#about">Account</a></li>
        <li><a href="#services">Heart</a></li>
        <li><a href="#contact">Cart</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
