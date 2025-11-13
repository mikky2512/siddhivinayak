import React from "react";
import { createGlobalStyle } from "styled-components";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const GlobalStyle = createGlobalStyle`
.social-footer {
  background: #1d1d1d;
  padding: 40px 20px;
  text-align: center;
  font-family: "Poppins", sans-serif;
}

.social-footer h4 {
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 20px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 25px;
}

.social-links a {
  color: #ccc;
  text-decoration: none;
  font-size: 22px;
  transition: 0.3s ease;
}

.social-links a:hover {
  color: #ff6b35; /* orange hover color */
  transform: translateY(-3px);
}

.footer {
  background: #000;
  color: #ddd;
  text-align: center;
  padding: 10px 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 14px;
}
`;

function FooterSocial() {
  return (
    <>
      <GlobalStyle />
            
      <div className="social-footer">
        <div className="social-links">
          <a href="https://x.com/techstrota" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.facebook.com/people/Tech-Strota/61550062532070/" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/techstrota/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/@techstrota" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
        </div>
      </div>
      <footer className="footer">
        Developed by <b>Techstrota</b>
      </footer>
    </>
  );
}

export default FooterSocial;
