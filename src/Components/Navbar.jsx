  import React, { useState } from "react";
  import { Link, useLocation } from "react-router-dom";
  import { createGlobalStyle } from "styled-components";

  function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Get current route

    return (
      <header className="navbar">
        <GlobalStyle />
        <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="logo" />

        {/* Hamburger Button */}
        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        {/* Menu */}
        <nav className={`nav-right ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={location.pathname === "/about" ? "active" : ""} onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/blogs" className={location.pathname === "/blogs " ? "active" : ""} onClick={() => setIsOpen(false)}>
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/services" className={location.pathname === "/services" ? "active" : ""} onClick={() => setIsOpen(false)}>
                Services
              </Link>
            </li>
          
            <li>
              <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""} onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }

  export default Navbar;

  const GlobalStyle = createGlobalStyle`
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #333D79;
    padding: 16px 40px;
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .navbar img {
    height: 50px;
    width: 150px;
  }

  /* NAV LINKS (Laptop & Tablet) */
  .nav-right ul {
    display: flex;
    gap: 30px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

.nav-right a {
  position: relative;
  color: white;
  text-decoration: none;
  font-weight: 600;
  padding-bottom: 4px;
  transition: 0.3s ease-in-out;
}

 /* UNDERLINE ANIMATION */
.nav-right a::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 0%;
  height: 2px;
  background: #0A8BB8;
  transition: width 0.3s ease-in-out;
}

.nav-right a:hover::after {
  width: 100%;
}

.nav-right a.active {
  color: #fff;
}

.nav-right a.active::after {
  width: 100%;
}
  /* HAMBURGER - ONLY ON MOBILE */
  .menu-btn {
    display: none;
    font-size: 30px;
    color: white;
    background: none;
    border: none;
    cursor: pointer;
  }

  /* 📱 MOBILE VIEW (Small Right-Side Box) */
  @media (max-width: 768px) {
    .menu-btn { display: block; }

    .nav-right {
      position: absolute;
      top: 60px;
      right: 10px;
      background: #2d4172;
      border-radius: 10px;
      width: 180px;
      display: none;
      padding: 15px 0;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    }

    .nav-right.open { display: block; }

    .nav-right ul {
      flex-direction: column;
      text-align: center;
    }

    .nav-right li {
      padding: 10px 0;
    }
  }

  /* FULL NAVBAR ON TAB & LAPTOP */
  @media (min-width: 769px) {
    .nav-right { display: flex !important; }
  }
  `;
