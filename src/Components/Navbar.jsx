import React from "react";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
.navbar {
  display:flex;
  justify-content:space-between;
  align-items:center;
  background-color:#EFECE3;
  color:black;
  padding:16px 28px;
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
  color:black;
  text-decoration:none;
  font-weight:600;
}
`;

function Navbar() {
  return (
    <header className="navbar">
         <GlobalStyle />
        <img src="logo.png" ></img>

      <nav className="nav-right">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li> <Link to="/services">Services</Link></li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;