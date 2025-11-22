import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <GlobalStyle />
      <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="logo" />

      {/* Hamburger Menu Button */}
      <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Navigation Links */}
      <nav className={`nav-right ${isOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

/* =============================
   GLOBAL STYLE BELOW
============================= */
const GlobalStyle = createGlobalStyle`
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333D79;
  padding: 16px 40px;
  position: sticky;
  top: 0;
  z-index: 50;
}
  /* ACTIVE & HOVER EFFECT */
.nav-right a {
  position: relative;
  color: #0a8bb8;
  text-decoration: none;
  font-weight: 600;
  padding-bottom: 4px;   /* little space for underline */
}

.nav-right a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 2px;
  background: #0a8bb8;  /* underline color (green like the image) */
  transition: width 0.3s ease-in-out;
}

/* Hovered Link */
.nav-right a:hover::after {
  width: 100%;
  color: #0a8bb8;
}

/* Active Page (CURRENT ROUTE) */
.nav-right a.active {
  color: #0a8bb8;  /* text becomes green like in image */
}

.nav-right a.active::after {
  width: 100%;
}


.navbar img {
  height: 50px;
  width: 150px;
}

/* NAV LINKS */
.nav-right ul {
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-right a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
}

/* Hamburger Button */
.menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 30px;
  color: white;
  cursor: pointer;
}
/* ==================================
      RESPONSIVE STYLES – ALL DEVICES
================================== */

/* 💻 Large Laptop & Desktop (1440px+) */
@media (max-width: 1440px) {
  .navbar { padding: 12px 30px; }
  .nav-right ul { gap: 25px; }
}

/* 💻 Normal Laptop (1024px - 1280px) */
@media (max-width: 1280px) {
  .navbar { padding: 12px 25px; }
  .navbar img { width: 140px; }
}

/* 📱 Tablet & iPad (768px - 1024px) */
@media (max-width: 1024px) {
  .navbar img { width: 130px; }
  .nav-right ul { gap: 20px; }
}

/* 📱 iPad Mini / iPad Air / Surface Pro */
@media (max-width: 912px) {
  .nav-right ul { gap: 18px; }
}

/* 📱 Mobile (iPhone XR / S20 Ultra / Pixel 7 / Fold) */
@media (max-width: 768px) {
  .menu-btn { display: block; }

  .nav-right {
    position: absolute;
    top: 70px;
    right: 0;
    background: #333D79;
    width: 100%;
    display: none;
    flex-direction: column;
    padding: 20px 0;
  }

  .nav-right.open {
    display: flex;
  }

  .nav-right ul {
    flex-direction: column;
    gap: 15px;
    text-align: center;
    width: 100%;
  }
}

/* 📱 Small Phones (iPhone SE / Galaxy A51/71) */
@media (max-width: 576px) {
  .navbar { padding: 10px 15px; }
  .navbar img { width: 120px; }
  .nav-right a { font-size: 16px; }
  .menu-btn { font-size: 26px; }
}

/* 📱 Very Small Phones (320px - 360px) */
@media (max-width: 400px) {
  .navbar img { width: 100px; }
  .nav-right a { font-size: 14px; }
  .menu-btn { font-size: 24px; }
}

/* 📱 Galaxy Fold / Very Small Screens */
@media (max-width: 320px) {
  .navbar { padding: 8px 10px; }
  .navbar img { width: 90px; }
  .menu-btn { font-size: 22px; }
}
`;
