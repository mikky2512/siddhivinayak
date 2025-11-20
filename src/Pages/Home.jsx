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

    {/* IMAGE IN CENTER */}
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
      {/* GET TO KNOW US SECTION */}
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


/* GLOBAL STYLES MUST BE ABOVE THE COMPONENT */
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
  }

  /* ---------------- HERO SECTION ---------------- */
  .home-hero::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: url(${bgimage});
    background-size: cover;
    background-position: center;
    filter: blur(3px) brightness(80%);
    z-index: 0;
  }

  .home-hero {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100vh;
    color: #000;
    text-align: center;
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
    padding: 60px 40px;
    background: #FAEBEF;
    border-radius: 20px;
    backdrop-filter: blur(4px);
    box-shadow: 0 4px 40px rgba(0,0,0,0.3);
    margin-bottom: 10px;
  }

  .hero-inner h1 { font-size: 3rem; font-weight: 700; }
  .hero-inner h1 span { color: #333d79; }

  .h_button button {
    margin-top: 10px;
    padding: 14px 26px;
    font-size: 1.1rem;
    border-radius: 30px;
    background: #333D79;
    border: none;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s ease;
  }
  .h_button button:hover { background: #0a8bb8; }
  .h_button button a { color: #fff; text-decoration: none; }

/* ---------------- IMAGE LAYOUT ---------------- */ 
.home-infor {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  max-width: 1300px;
  margin: 0 auto;
  padding: 30px 20px;
  flex-wrap: wrap;
  font-size: 18px;
}

.home-infor h2 {
  font-size: 40px;
  color: #333D79;
  margin-bottom: -30px;
}

.home-infor p {
  font-size: 22px;
}


/* ---------- LAYOUT ---------- */
.cards-image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 35px; /* reduced gap */
  flex-wrap: wrap;
  width: 100%;
}

.card-column {
  display: flex;
  flex-direction: column;
  gap: 25px;
}


/* ---------- CARD STYLE ---------- */
.service-card {
  width: 360px;     /* reduced from 420px → prevents overflow */
  background: #fff;
  border-radius: 18px;
  padding: 30px 25px;
  text-align: left;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  border: 1px solid #e6d9ff;
  transition: 0.3s ease;
}

.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.service-card .icon {
  font-size: 48px;
  margin-bottom: 15px;
}

.service-card h3 {
  font-size: 22px;
  margin-bottom: 10px;
  color: #262626;
}

.service-card p {
  font-size: 17px;
  line-height: 1.6;
  color: #555;
}


/* ---------- CENTER IMAGE ---------- */
.center-image img {
  width: 400px;   /* reduced from 450 → aligns perfectly */
  height: 330px;
  object-fit: cover;
  border-radius: 18px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
  transition: transform 0.4s ease;
}

.center-image img:hover {
  transform: scale(1.05);
}


/* ---------- RESPONSIVE ---------- */
@media (max-width: 1100px) {

  .cards-image-wrapper {
    flex-direction: column;
  }

  .card-column {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }

  .service-card {
    width: 90%;
  }

  .center-image img {
    width: 90%;
    height: auto;
  }
}

@media (max-width: 600px) {

  .card-column {
    flex-direction: column;
  }

  .service-card, 
  .center-image img {
    width: 100%;
    height: auto;
  }
}

/* ---------------- SERVICE INTRO ---------------- */
.service-intro {
  padding: 60px 0;
  background: #333d79;
  bottom-margin: 100px;
  color: #fff;
}
.service-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 40px;
}
.service-left .big-forklift { width: 500px; border-radius: 8px; }
.service-right { max-width: 600px; }

.container {
  display: flex;
  justify-content: flex-start;
  gap: 40px; /* Space between left and right */
  padding: 20px;
}

.left-content {
  flex: 1; /* takes up remaining space */
  max-width: 600px;
  text-align: left;
  font-family: Arial, sans-serif;
}

.right-content {
  flex: 1;
  /* You can add styles for images or right content here */
}


/* ---------------- WHY CHOOSE US ---------------- */
.features-grid {
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 25px;
}
.feature-card {
  background: #f7f7f7;
  padding: 28px;
  border-radius: 12px;
  text-align: center;
  transition: 0.3s ease;
  border: 1px solid #eee;
  animation: fadeUp 1s ease-in-out;
}
.feature-card:hover { background: #333d79; color: #fff; }

/* KEYFRAME ANIMATIONS */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
/* ---------------- GET TO KNOW US SECTION ---------------- */
.get-to-know {
  padding: 80px 0;
  display: flex;
  align-items: center;
  gap: 50px;
  max-width: 1200px;
  margin: 0 auto;
}

.get-left {
  position: relative;
}

.get-left img.big {
  width: 420px;
  height: 280px;
  border-radius: 15px;
  object-fit: cover;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
}

.get-left img.small {
  width: 230px;
  height: 180px;
  border-radius: 12px;
  object-fit: cover;
  position: absolute;
  bottom: -70px;
  right: -30px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  background: #fff;
  padding: 5px;
}

.get-right h4 {
  color: #333D79;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.get-right h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 15px;
}

.call-box {
  margin-top: 20px;
  background: #333d79;
  padding: 18px 26px;
  border-radius: 10px;
  color: white;
  font-weight: 600;
  width: fit-content;
  cursor: pointer;
  transition: 0.3s;
}

.call-box:hover {
  background: #0a8bb8;
}

/* ---------------- RESPONSIVE ---------------- */
@media (max-width: 768px) {
  .service-container, .home-infor { flex-direction: column; text-align: center; }
  .big-img, .small-img { width: 90%; height: auto; }
}
`;
