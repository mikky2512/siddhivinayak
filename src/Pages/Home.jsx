import React, { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import bgimage from "./Images/h1.jpg";
import bgimage2 from "./Images/h2.jpg";
import bgimage4 from "./Images/h4.jpg";
import bgimage5 from "./Images/h5.jpg";
import bgimage6 from "./Images/h6.jpg";


function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="home-info">
      <GlobalStyle />

      {/* HERO */}
      <section className="home-hero" data-aos="zoom-in">
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
      <h2 className="section-title">Our Warehouse Services</h2>
      <section className="home-infor">
        <div className="cards-image-wrapper">
          <div className="card-column" data-aos="fade-right">
            <div className="service-card"><span className="icon">🧾</span><h3>Inventory Management</h3><p>Real-time tracking, RFID monitoring, FIFO/LIFO systems.</p></div>
            <div className="service-card"><span className="icon">🚚</span><h3>Loading & Unloading</h3><p>Forklifts, pallets, conveyors & expert handling.</p></div>
          </div>

          <div className="center-image" data-aos="zoom-in">
            <img src={bgimage2} alt="Warehouse" />
          </div>

          <div className="card-column" data-aos="fade-left">
            <div className="service-card"><span className="icon">📦</span><h3>Packaging & Labeling</h3><p>Secure packaging with custom barcoding solutions.</p></div>
            <div className="service-card"><span className="icon">🚀</span><h3>Fast Dispatch</h3><p>Fleet management & route optimization.</p></div>
          </div>
        </div>
      </section>

      {/* SERVICE INTRO */}
      <section className="service-intro">
        <div className="service-left" data-aos="fade-right">
          <img src={bgimage4} alt="Big Forklift" />
        </div>
        <div className="service-right" data-aos="fade-left">
          <h1>Providing Premier Forklift <strong>Sales, Services & Parts</strong></h1>
          <ul>
            <li>Daily, weekly, monthly rentals</li>
            <li>New & reconditioned forklifts</li>
            <li>Battery, charger & repair services</li>
            <li>Diesel, LPG & electric repairs</li>
            <li>Parts for all brands</li>
          </ul>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <h2 className="section-title">Why Choose Us</h2>
      <div className="features-grid">
        <div className="feature-card" data-aos="zoom-in"><h4>✔ Professional Team</h4><p>Skilled staff committed to quality.</p></div>
        <div className="feature-card" data-aos="zoom-in"><h4>✔ Fast Delivery</h4><p>Real-time tracking & quick dispatch.</p></div>
        <div className="feature-card" data-aos="zoom-in"><h4>✔ 24/7 Support</h4><p>Always ready to help.</p></div>
        <div className="feature-card" data-aos="zoom-in"><h4>✔ Safe & Secure</h4><p>Strict safety protocols.</p></div>
      </div>

      {/* GET TO KNOW US */}
      <section className="get-to-know">
        <div className="get-left" data-aos="fade-right">
          <img src={bgimage5} alt="Operator" className="big" />
          <img src={bgimage6} alt="Forklift" className="small" />
        </div>
        <div className="get-right" data-aos="fade-left">
          <h4>GET TO KNOW US</h4>
          <h2>Welcome to Forklift Rent and Services</h2>
          <p>We specialize in providing top-notch solutions for all your forklift needs. Efficiency, safety, and reliability are our priorities.</p>
          <p><strong>We have 20+ years of experience in forklift and forklift services.</strong></p>
          <a href="tel:+919033476660" style={{ textDecoration: "none" }}>
            <div className="call-box">📞 +91 90334 76660</div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;


const GlobalStyle = createGlobalStyle`
  * { 
margin: 0; 
padding: 0; 
box-sizing: border-box; 
}
  body { 
  font-family: 'Poppins', sans-serif; 
  background: #FAEBEF; 
  color: #333;
  overflow-x: hidden; 
 }

  /* HERO */
  .home-hero::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: url(${bgimage});
    background-size: cover;
    background-position: center;
    filter: blur(3px) brightness(50%);
    z-index: 0;
}
  .home-hero {
    height: 90vh;
    background: url(${bgimage}) center/cover no-repeat;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeIn 1.5s ease-in-out;
  }
    . home-hero::
  .home-hero::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.4);
  }
  .home-hero .hero-inner {
    position: relative;
    z-index: 2;
    background: #FAEBEF;
    padding: 40px 30px;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 6px 25px rgba(0,0,0,0.2);
    animation: fadeUp 1.2s ease-in-out;
  }
  .home-hero h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #333D79;
  }
  .home-hero h1 span { color: #333D79; }
  .h_button button {
    margin-top: 15px;
    padding: 12px 24px;
    font-size: 1.1rem;
    border-radius: 30px;
    background: #333D79;
    border: none;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s ease;
  }
  .h_button button:hover { 
  background: #0a8bb8; 
  }

   .h_button button a {
    color: #fff; 
    text-decoration: none; 
    }

  /* SECTION TITLES */
  .section-title {
    text-align: center;
    font-size: 2.4rem;
    font-weight: 600;
    margin: 60px 0 30px;
    color: #333D79;
    animation: fadeUp 1s ease-in-out;
  }

  /* IMAGE LAYOUT */
  .home-infor {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: auto;
    padding: 20px;
    gap: 40px;
  }
  .cards-image-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 30px;
  justify-items: center;
  align-items: center;
}

.card-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
  .service-card {
    background: #fff;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 6px 22px rgba(0,0,0,0.1);
    text-align: center;
    transition: 0.3s ease;
  }
  .service-card:hover {
   transform: translateY(-8px); 
   box-shadow: 0 10px 25px rgba(0,0,0,0.18); 
   }
  
   .service-card .icon {
    font-size: 48px; 
    margin-bottom: 12px; 
    display: flex; 
    justify-content: center; 
    }

  .service-card h3 {
   font-size: 1.4rem;
    margin-bottom: 10px; 
    color: #333D79; 
    }

  .service-card p {
   font-size: 1rem; 
   color: #333; 
   line-height: 1.6; 
   }

  .center-image {
  grid-column: 2;
  grid-row: 1 / span 2; /* Center image spans both rows */
}
  .center-image img {
    width: 400px;
    border-radius: 15px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.2);
    transition: 0.3s ease;
    animation: fadeUp 1s ease-in-out;
  }
  .center-image img:hover { 
  transform: scale(1.05); 
  }

  /* SERVICE INTRO */
  .service-intro {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 40px;
    max-width: 1200px;
    margin: auto;
    padding: 60px 20px;
  }
  .service-left img {
   width: 450px; 
   border-radius: 12px; 
   animation: fadeIn 1s ease-in-out; 
   }

  .service-right {
   max-width: 500px;
    animation: fadeUp 1s ease-in-out;
  }

  .service-right h1 {
   color: #333D79; 
   margin-bottom: 15px; 
   }

  .service-right ul {
   list-style: disc inside; 
   color: #333; 
   }

  .service-right li { 
  margin-bottom: 8px; 
  }

  /* WHY CHOOSE US */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(260px,1fr));
    gap: 25px;
    max-width: 1200px;
    margin: auto;
    padding: 20px;
  }
  .feature-card {
    background: #f7f7f7;
    padding: 25px;
    border-radius: 12px;
    text-align: center;
    transition: 0.3s ease;
    border: 1px solid #eee;
    animation: fadeUp 1s ease-in-out;
  }
  .feature-card:hover { 
  transform: translateY(-10px);
   background: #333D79;
  color: #fff; 
  }

  /* GET TO KNOW US */
  .get-to-know {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 40px;
    max-width: 1200px;
    margin: 60px auto;
    padding: 20px;
  }
  .get-left img.big { 
  width: 400px; 
  border-radius: 12px; 
  animation: fadeIn 1s ease-in-out; 
  }

  .get-left img.small { 
  width: 220px; 
  border-radius: 12px; 
  animation: floatImage 3s ease-in-out infinite; margin-top: 15px; 
  }

  .get-right { 
  max-width: 500px;
   animation: fadeUp 1s ease-in-out; 
   }

  .get-right h4 { 
  color: #333D79;
   margin-bottom: 10px; 
   }

  .get-right h2 { 
  margin-bottom: 15px; 
  color: #333D79; 
  }

  .call-box {
    margin-top: 20px;
    background: #333D79;
    color: #fff;
    padding: 16px 24px;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
  }
  .call-box:hover { 
  background: #0a8bb8; 
  }

  /* KEYFRAMES */
  @keyframes fadeIn { from { opacity: 0; transform: scale(0.97); } to { opacity: 1; transform: scale(1); } }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes floatImage { 0%{ transform: translateY(0);} 50%{ transform: translateY(-10px);} 100%{ transform: translateY(0);} }

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

  @media (max-width: 600px) {
    .hero-inner h1 { font-size: 1.7rem; }
    .service-card { width: 100%; }
    .center-image img { width: 100%; height: auto; }
    .get-left img.small { width: 200px; height: 150px; }
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
