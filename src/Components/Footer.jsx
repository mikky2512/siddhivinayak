import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
.footer {
  background: #333D79;
  color: #fff;
  padding: 60px 20px 20px;
  font-family: "Poppins", sans-serif;
}

/* GRID: LEFT | CENTER | RIGHT */
.footer-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  max-width: 1300px;
  margin: auto;
  align-items: flex-start;
}

/* LEFT SECTION */
.footer-left {
  display: flex;
  flex-direction: column;
}

.footer-logo {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 10px;
}

.footer-about {
  font-size: 14px;
  color: #bbb;
  margin-bottom: 25px;
}

/* SOCIAL ICONS */
.footer-socials {
  display: flex;
  gap: 15px;
}

.footer-socials a {
  color: white;
  font-size: 17px;
  background: #2c2c2c;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  transition: 0.3s;
}

.footer-socials a:hover {
  background: #d27b6a;
  transform: translateY(-5px);
}

/* CENTER SECTION */
.footer-center {
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

.footer-center h3 {
  font-size: 18px;
  margin-bottom: 15px;
}

.footer-center ul {
  list-style: none;
  padding: 0;
}

.footer-center ul li {
  margin-bottom: 8px;
}

.footer-center ul li a {
  color: #bbb;
  font-size: 14px;
  text-decoration: none;
  transition: 0.3s;
}

.footer-center ul li a:hover {
  color: #0a8bb8;
  transform: translateX(5px);
}

/* RIGHT SECTION */
.footer-right {
  text-align: right;
}

.footer-right h3 {
  font-size: 18px;
  margin-bottom: 15px;
}

.footer-right p {
  font-size: 14px;
  color: #bbb;
  margin-bottom: 10px;
}

/* BOTTOM COPYRIGHT */
.footer-bottom {
  text-align: center;
  padding-top: 25px;
  border-top: 1px solid #333;
  margin-top: 50px;
}

.footer-bottom p {
  font-size: 13px;
  color: #aaa;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .footer-center {
    flex-direction: column;
  }
}

@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr; /* Stack all */
  }

  .footer-right {
    text-align: left;
  }
}
`;

const Footer = () => {
  return (
    <footer className="footer">
      <GlobalStyle />

      <div className="footer-container">

        {/* LEFT SECTION */}
        <div className="footer-left">
          <h2 className="footer-logo">siddhivinayak</h2>
          <p className="footer-about">
            Delivering innovative digital solutions with quality,
            creativity and commitment.
          </p>

          <div className="footer-socials">
            <a href="https://www.facebook.com/people/Tech-Strota/61550062532070/"><FaFacebookF /></a>
            <a href="https://www.instagram.com/techstrota/"><FaInstagram /></a>
            <a href="https://www.youtube.com/@techstrota"><FaYoutube /></a>
          </div>
        </div>

        {/* CENTER SECTION */}
        <div className="footer-center">

          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/blogs">Blogs</a></li>
            </ul>
          </div>

          <div>
            <h3>Our Services</h3>
            <ul>
              <li><a href="/Services/Fulfillment">Fulfillment</a></li>
              <li><a href="/Services/Distribution">Distribution</a></li>
            </ul>
          </div>

        </div>

       {/* RIGHT SECTION */}
        <div className="footer-right">
           <h3>Address</h3>
  
             <p style={{ lineHeight: "1.6" }}>
                 156, 1st Floor, C Tower, K10 Atlantis,<br />
                 Near Genda Circle, opp. Honest Restaurant,<br />
                Vadodara, Gujarat 390007
             </p>

  <p>Email: info@techstrota.com</p>
  <p>Phone: +91 98765 43210</p>
</div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>developed by © TechStrota — All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
