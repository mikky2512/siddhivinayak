import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { createGlobalStyle } from "styled-components";

import bgimage from "./Images/h1.jpg";
import bgimage2 from "./Images/h2.jpg";
import bgimage4 from "./Images/h4.jpg";
import bgimage5 from "./Images/h5.jpg";
import bgimage6 from "./Images/h6.jpg";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });  // start AOS
  }, []);

  return (
    <div className="home-info">
      <GlobalStyle />

      {/* HERO SECTION */}
      <section className="home-hero" data-aos="zoom-in">
        <div className="hero-inner">
          <h1 data-aos="fade-up">
            Siddhivinayak Enterprise <br />
            <span>A Warehouse & Storage </span>
            <span>Company</span>
          </h1>
          <div className="h_button" data-aos="fade-up" data-aos-delay="200">
            <button><a href="/contact">Get in Touch</a></button>
          </div>
        </div>
      </section>

      {/* IMAGE LAYOUT */}
      <section className="home-infor">
        <h2 data-aos="fade-up">Our Warehouse Services</h2>
        <p data-aos="fade-up" data-aos-delay="200">
          At Siddhivinayak Enterprise A Warehouse & Storage Company, we offer reliable and efficient warehouse
          services designed to support your business operations.
        </p>

        <div className="cards-image-wrapper">
          <div className="card-column">
            <div className="service-card" data-aos="fade-right">
              <span className="icon">🧾</span>
              <h3>Inventory Management</h3>
              <p>Real-time tracking, RFID monitoring, FIFO/LIFO systems.</p>
            </div>

            <div className="service-card" data-aos="fade-right" data-aos-delay="300">
              <span className="icon">🚚</span>
              <h3>Loading & Unloading</h3>
              <p>Modern equipment such as forklifts & conveyors.</p>
            </div>
          </div>

          <div className="center-image" data-aos="zoom-in">
            <img src={bgimage2} alt="Warehouse" />
          </div>

          <div className="card-column">
            <div className="service-card" data-aos="fade-left">
              <span className="icon">📦</span>
              <h3>Packaging & Labeling</h3>
              <p>Secure packaging with barcoding solutions.</p>
            </div>

            <div className="service-card" data-aos="fade-left" data-aos-delay="300">
              <span className="icon">🚀</span>
              <h3>Fast Dispatch</h3>
              <p>Fleet management & route optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE INTRO */}
      <section className="service-intro" data-aos="fade-up">
        <div className="service-container">
          <div className="service-left" data-aos="fade-right">
            <img src={bgimage4} alt="Big Forklift" className="big-forklift" />
          </div>

          <div className="service-right" data-aos="fade-left">
            <h1>Providing Premier Forklift <strong>Sales, Services & Parts</strong></h1>
            <ul>
              <li>Daily / weekly rentals</li>
              <li>Reconditioned forklifts</li>
              <li>Battery & repair services</li>
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
      <section className="get-to-know" data-aos="fade-up">
        <div className="get-left" data-aos="fade-right">
          <img src={bgimage5} alt="Operator" className="big" />
          <img src={bgimage6} alt="Forklift" className="small" />
        </div>

        <div className="get-right" data-aos="fade-left">
          <h4>GET TO KNOW US</h4>
          <h2>Welcome to Forklift Rent and Services</h2>
          <p>We specialize in providing top-notch solutions for all your forklift needs.</p>
          <p><strong>20+ years of experience in forklift services.</strong></p>

          <a href="tel:+919033476660" style={{ textDecoration: "none" }}>
            <div className="call-box">📞 +91 90334 76660</div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;

/* ---------------- GLOBAL STYLE ---------------- */
const GlobalStyle = createGlobalStyle`
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    background: #fafafa;
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
    filter: blur(4px) brightness(80%);
    z-index: 0;

    /* ⭐ HERO BACKGROUND ZOOM ANIMATION */
   animation: zoomHero 3s ease-in-out forwards;  
  }

  @keyframes zoomHero {
    0% { transform: scale(1); }
    100% { transform: scale(1.12); }
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

    /* ⭐ HERO TEXT FADE + SLIDE ANIMATION */
    opacity: 0;
    animation: fadeUpHero 1.2s ease-out forwards;
  }

  @keyframes fadeUpHero {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .hero-inner h1 {
  font-weight: 700;
  line-height: 1.4;
  }
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

  /* ------------------------------------------- */
  /* REMAINING CSS SAME AS YOUR ORIGINAL BELOW   */
  /* ------------------------------------------- */

  /* ---------------- IMAGE LAYOUT ---------------- */ 
  .home-infor {
    background-color: #FAEBEF;
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
  /* Section Title */
.section-title, h2 {
  text-align: center;
  font-size: 2.2rem;
  letter-spacing: 1px;
  margin-bottom: 35px;
  font-weight: 600;
  color: #333D79;
}

  .home-infor p { 
  line-height: 1.8;
  color: #555;
  font-size: 1.05rem; 
  }

  .cards-image-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 35px;
    flex-wrap: wrap;
    width: 100%;
  }

  .card-column {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .service-card{
  animation-fill-mode: both;
  border-radius: 14px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
    width: 360px;
    background: #fff;
    padding: 30px 25px;
    text-align: left;
    border: 1px solid #e6d9ff;
     opacity: 0;
  animation: fadeUp 0.8s ease forwards; /* forwards is good */
  animation-fill-mode: both;
  }

  .service-card:hover{
  transform: translateY(-6px);
  box-shadow: 0 8px 22px rgba(0,0,0,0.15);
  }
  .service-card .icon {
    font-size: 48px;
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .service-card h3 { font-size: 22px; margin-bottom: 10px; }
  .service-card p { font-size: 17px; color: #030303ff; line-height: 1.6; }

  .center-image img {
    width: 400px;
    height: 330px;
    object-fit: cover;
    border-radius: 18px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
    transition: transform 0.4s ease;
  }

  .center-image img:hover { transform: scale(1.05); }

    /* ---------- ANIMATIONS ---------- */

/* Fade-in & slide-up animation */
@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animate all cards and center image on load */
.service-card,
.center-image img {
  opacity: 0;
  animation: fadeUp 0.8s ease forwards;
}

/* Add delay to cards (staggered animation) */
.service-card:nth-child(1) { animation-delay: 0.2s; }
.service-card:nth-child(2) { animation-delay: 0.4s; }
.service-card:nth-child(3) { animation-delay: 0.6s; }
.service-card:nth-child(4) { animation-delay: 0.8s; }

/* Hover animation improvement */
.service-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 10px 25px rgba(0,0,0,0.18);
}
.center-image img:hover {
  transform: scale(1.07);
}


  /* ---------------- SERVICE INTRO ---------------- */
  .service-intro {
    padding: 60px 0;
    background: #333d79;
    color: #fff;
    overflow: hidden; 
  }

  .service-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 40px;
  }
/* IMAGE ANIMATION */
.service-left {
  opacity: 0;
  animation: slideLeft 1s ease forwards;   /* FOR ANIMATION */
}

@keyframes slideLeft {
  from {
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

  .service-left .big-forklift {
    width: 500px;
    border-radius: 8px;
  }
/* TEXT ANIMATION */
.service-right {
  max-width: 600px;
  opacity: 0;
  animation: slideRight 1s ease forwards;
  animation-delay: 0.3s;   /* delay for better effect */
}

@keyframes slideRight {
  from {
    transform: translateX(100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
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

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* ---------------- GET TO KNOW US ---------------- */

  /* ---------------- ANIMATION ---------------- */
@keyframes fadeSlideLeft {
  0% { opacity: 0; transform: translateX(-50px); }
  100% { opacity: 1; transform: translateX(0); }
}

@keyframes fadeSlideRight {
  0% { opacity: 0; transform: translateX(50px); }
  100% { opacity: 1; transform: translateX(0); }
}

@keyframes floatImage {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}


  .get-to-know {
    padding: 80px 0;
    display: flex;
    align-items: center;
    gap: 50px;
    max-width: 1200px;
    margin: 0 auto;
    animation: fadeSlideLeft 1s ease-in-out both;
  }

  .get-left { position: relative; }

  .get-left img.big {
    width: 420px;
    height: 280px;
    border-radius: 15px;
    object-fit: cover;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
     animation: fadeSlideLeft 1.2s ease-in-out both;
  }

  .get-left img.small {
    width: 230px;
    height: 180px;
    border-radius: 12px;
    object-fit: cover;
    position: absolute;
    bottom: -50px;
    right: -40px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    background: #fff;
    padding: 5px;
    animation: floatImage 3s ease-in-out infinite;
  }
.get-right {
  animation: fadeSlideRight 1s ease-in-out both;
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
    font-family: 'Poppins', sans-serif;
    letter-spacing: 0.5px;
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

  .call-box:hover { background: #0a8bb8; }

  /* ---------------- RESPONSIVE ---------------- */
  @media (max-width: 1440px) {
    .hero-inner { max-width: 70%; }
    .service-card { width: 330px; }
    .center-image img { width: 350px; height: 290px; }
  }

  @media (max-width: 1366px) {
    .hero-inner { max-width: 75%; }
    .service-card { width: 320px; }
  }

  @media (max-width: 1024px) {
    .get-to-know,
    .service-container {
      flex-direction: column;
      text-align: center;
    }
    .service-left .big-forklift { width: 85%; }
    .get-left img.big { width: 90%; height: auto; }
    .get-left img.small { position: static; margin-top: 15px; }
    .center-image img { width: 85%; }
  }

  @media (max-width: 820px) {
    .hero-inner { max-width: 85%; padding: 40px 20px; }
    .hero-inner h1 { font-size: 2rem; }
    .features-grid { grid-template-columns: repeat(2, 1fr); }
    .cards-image-wrapper,
    .get-to-know { flex-direction: column; }
  }
@media (max-width: 768px) {
  .service-container {
    flex-direction: column;
    text-align: center;
  }

  .service-left .big-forklift {
    width: 100%;
  }

  .service-right {
    animation-delay: 0.2s;
  }
}
@media (max-width: 500px) {
  section {
    padding: 20px 12px;  /* universal spacing for mobile */
  }
}
  @media (max-width: 600px) {
  .home-hero {height: 80vh; padding-top: 50px; }
    .hero-inner h1 { font-size: 1.7rem; }
    .service-card { width: 100%; }
    .center-image img { width: 100%; height: auto; }
    .get-left img.small { width: 200px; height: 150px; }
    .get-to-know { flex-direction: column; width: 100%; text-align: center; padding: 40px 10px; }
  .get-right { width: 100%; }
  }

  @media (max-width: 480px) {
    .home-infor h2 { font-size: 30px; }
    .hero-inner h1 { font-size: 1.5rem; }
    .h_button button { padding: 10px 16px; }
    .service-card p { font-size: 15px; }
    .get-right h2 { font-size: 1.5rem; }
  }

  @media (max-width: 390px) {
    .hero-inner { padding: 20px; }
    .hero-inner h1 { font-size: 1.3rem; }
    .service-card p { font-size: 14px; }
    .get-right h4 { font-size: 0.9rem; }
  }

  @media (max-width: 360px) {
    .hero-inner h1 { font-size: 1.1rem; }
    .h_button button { padding: 6px 12px; font-size: 0.8rem; }
  }
`;
