import React from "react";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

function Navbar() {
  return (
    <div>
    <header className="navbar">
         <GlobalStyle />
        <img src="logo.png" alt="logo"></img>
      <nav className="nav-right">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li> <Link to="/services">Services</Link></li>
        </ul>
      </nav>
    </header>
    </div>
  );
}

export default Navbar;

const GlobalStyle = createGlobalStyle`
.navbar {
  display:flex;
  justify-content:space-between;
  align-items:center;
  background-color:#333D79;
  color:black;
  padding:16px 40px;
  position:sticky;
  top:0;
  z-index:20;
  height: 80px;
}
.navbar img {
  height: 50px;
  width: 150px;
  margin-right: 660px;
  align-items: center;
  margin-left: -16px;
}
.brand { margin:0; font-size:20px; }

.nav-right ul {
  display:flex;
  gap:30px;
  list-style:none;
  margin:0;
  padding:0;
}

.nav-right a {
  color:#fff;
  text-decoration:none;
  font-weight:600;
}
  /* For Tablets (max-width: 1024px) */
@media (max-width: 1024px) {
  .navbar {
    padding: 15px 25px;
  }

  .nav-right ul {
    gap: 20px;
  }

  .navbar img {
    width: 130px;
  }
}

/* For Small Tablets / Large Phones (max-width: 768px) */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    padding: 10px 20px;
  }

  .nav-right ul {
    flex-direction: column;
    width: 100%;
    gap: 15px;
    margin-top: 10px;
  }

  .nav-right a {
    font-size: 16px;
  }
}

/* For Phones (max-width: 480px) */
@media (max-width: 480px) {
  .navbar {
    padding: 8px 15px;
  }

  .navbar img {
    width: 120px;
    height: auto;
  }

  .nav-right ul {
    gap: 10px;
  }

  .nav-right a {
    font-size: 15px;
  }
}
`;