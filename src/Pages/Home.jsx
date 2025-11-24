import React from "react";
import { createGlobalStyle } from "styled-components";

import bgimage from "./Images/h1.jpg";
import bgimage2 from "./Images/h2.jpg";
import bgimage4 from "./Images/h4.jpg";
import bgimage5 from "./Images/h5.jpg";
import bgimage6 from "./Images/h6.jpg";

function Home() {
  return (
    <div className="home-info">
      <GlobalStyle />

      {/* HERO SECTION */}
      <section className="home-hero">
        <div className="hero-inner">
          <h1>
            Siddhivinayak Enterprise <br />
            <span>A Warehouse & Storage </span>
            <span>Company</span>
          </h1>
          <div className="h_button">
            <button><a href="/contact">Get in Touch</a></button>
          </div>
        </div>
      </section>

      {/* IMAGE LAYOUT */}
      <section className="home-infor">
        <h2>Our Warehouse Services</h2>
        <p>
          At Siddhivinayak Enterprise A Warehouse & Storage Company, we offer reliable and efficient warehouse services
          designed to support your business operations. Whether you need short-term storage, long-term inventory solutions,
          or complete logistics support, we provide safe, secure, and organized storage facilities to meet your needs.
        </p>

        <div className="cards-image-wrapper">
          {/* LEFT 2 CARDS */}
          <div className="card-column">
            <div className="service-card">
              <span className="icon">🧾</span>
              <h3>Inventory Management</h3>
              <p>Real-time tracking, RFID monitoring, FIFO/LIFO systems.</p>
            </div>

            <div className="service-card">
              <span className="icon">🚚</span>
              <h3>Loading & Unloading</h3>
              <p>Forklifts, pallets, conveyors & expert handling.</p>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="center-image">
            <img src={bgimage2} alt="Warehouse" />
          </div>

          {/* RIGHT 2 CARDS */}
          <div className="card-column">
            <div className="service-card">
              <span className="icon">📦</span>
              <h3>Packaging & Labeling</h3>
              <p>Secure packaging with custom barcoding solutions.</p>
            </div>

            <div className="service-card">
              <span className="icon">🚀</span>
              <h3>Fast Dispatch</h3>
              <p>Fleet management & route optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE INTRO */}
      <section className="service-intro">
        <div className="service-container">
          <div className="service-left">
            <img src={bgimage4} alt="Big Forklift" className="big-forklift" />
          </div>

          <div className="service-right">
            <h1>Providing Premier Forklift <strong>Sales, Services & Parts</strong></h1>
            <ul>
              <li>Daily, weekly, monthly rentals</li>
              <li>New & reconditioned forklifts</li>
              <li>Battery, charger & repair services</li>
              <li>Diesel, LPG & electric repairs</li>
              <li>Parts for all brands</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <h2 className="section-title">Why Choose Us</h2>
      <div className="features-grid">
        <div className="feature-card"><h4>✔ Professional Team</h4><p>Skilled staff committed to quality.</p></div>
        <div className="feature-card"><h4>✔ Fast Delivery</h4><p>Real-time tracking & quick dispatch.</p></div>
        <div className="feature-card"><h4>✔ 24/7 Support</h4><p>Always ready to help.</p></div>
        <div className="feature-card"><h4>✔ Safe & Secure</h4><p>Strict safety protocols.</p></div>
      </div>

      {/* GET TO KNOW US */}
      <section className="get-to-know">
        <div className="get-left">
          <img src={bgimage5} alt="Operator" className="big" />
          <img src={bgimage6} alt="Forklift" className="small" />
        </div>

        <div className="get-right">
          <h4>GET TO KNOW US</h4>
          <h2>Welcome to Forklift Rent and Services</h2>
          <p>
            We specialize in providing top-notch solutions for all your forklift needs.
            With years of expertise in the industry, we understand the importance of efficiency,
            safety, and reliability in material handling operations.
          </p>
          <p><strong>We have 20+ years of experience in forklift and forklift services.</strong></p>

          <div className="call-box">
            📞 +91 90334 76660
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;

/* ================================================= */
/* GLOBAL STYLES (FULL RESPONSIVE CSS BELOW) */
/* ================================================= */

const GlobalStyle = createGlobalStyle`
  
/* RESET */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #FAEBEF;
  color: #333;
  line-height: 1.6;
}

/* HERO SECTION */
.home-hero {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url(${bgimage});
  background-size: cover;
  background-position: center;
  filter: blur(3px) brightness(80%);
  z-index: 0;
}

.home-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.4);
}

.hero-inner {
  position: relative;
  z-index: 1;
  max-width: 900px;
  width: 90%;
  padding: 40px 25px;
  background: #FAEBEF;
  border-radius: 20px;
  box-shadow: 0 4px 40px rgba(0,0,0,0.3);
  text-align: center;
}

.hero-inner h1 {
  font-size: clamp(1.8rem, 5vw, 3.2rem);
}

.hero-inner h1 span {
  color: #333d79;
}

.h_button button {
  margin-top: 12px;
  padding: 14px 26px;
  border-radius: 30px;
  border: none;
  background: #333d79;
  font-size: 1.1rem;
  color: #fff;
  cursor: pointer;
  transition: 0.3s ease;
}

.h_button button:hover {
  background: #0a8bb8;
}

/* WAREHOUSE INFO */
.home-infor {
  background-color: #FAEBEF;
  max-width: 1300px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
}

.home-infor h2 {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: #333D79;
}

.home-infor p {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  width: 95%;
  max-width: 900px;
  margin: 0 auto 30px;
}

/* Cards + center image */
.cards-image-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
}

.card-column {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.service-card {
  width: min(360px, 95vw);
  background: #fff;
  padding: 25px;
  border-radius: 18px;
  text-align: left;
  border: 1px solid #e6d9ff;
  transition: 0.3s;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
}

.center-image img {
  width: min(420px, 95vw);
  border-radius: 18px;
}

/* SERVICE INTRO */
.service-intro {
  background: #333d79;
  color: white;
  padding: 70px 20px;
}

.service-container {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  max-width: 1200px;
  margin: auto;
}

.service-left .big-forklift {
  width: min(500px, 95vw);
  border-radius: 10px;
}

/* WHY CHOOSE US */
.features-grid {
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 25px;
}

.feature-card {
  padding: 28px;
  background: #f7f7f7;
  border-radius: 12px;
  transition: 0.3s;
  text-align: center;
}

.feature-card:hover {
  background: #333d79;
  color: white;
}

/* GET TO KNOW */
.get-to-know {
  max-width: 1200px;
  margin: 80px auto;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  align-items: center;
  padding: 20px;
}

.get-left img.big {
  width: min(420px, 95vw);
  border-radius: 15px;
}

.get-left img.small {
  width: 200px;
  border-radius: 12px;
  position: absolute;
  right: -20px;
  bottom: -40px;
}

@media (max-width: 700px) {
  .get-left img.small {
    position: relative;
    right: 0;
    bottom: 0;
    margin-top: 20px;
  }
}

.call-box {
  margin-top: 20px;
  background: #333d79;
  padding: 16px 26px;
  border-radius: 10px;
  color: white;
  font-weight: 600;
  display: inline-block;
}

@media (max-width: 900px) {
  .card-column,
  .service-container,
  .get-to-know {
    flex-direction: column;
    text-align: center;
  }
}
`;
