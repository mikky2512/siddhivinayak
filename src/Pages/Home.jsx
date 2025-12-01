import React from "react";
import { createGlobalStyle } from "styled-components";
import bgimage from "./Images/h1.jpg";
import bgimage2 from "./Images/h2.jpg";
import bgimage5 from "./Images/h5.jpg";

// Infrastructure images
import infra1 from "./Images/infra1.jpg";
import infra2 from "./Images/infra2.jpg";
import infra3 from "./Images/infra3.jpg";

function Home() {
  return (
    <div className="home-info">
      <GlobalStyle />

      {/* HERO */}
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
      <h2 className="section-title"><a href="/services">Our Warehouse Services</a></h2>
      <section className="home-infor">
        <div className="cards-image-wrapper">
          <div className="card-column">
            <div className="service-card"><span className="icon">🧾</span><h3>Inventory Management</h3><p>Real-time tracking, RFID monitoring, FIFO/LIFO systems.</p></div>
            <div className="service-card"><span className="icon">🚚</span><h3>Loading & Unloading</h3><p>Forklifts, pallets, conveyors & expert handling.</p></div>
          </div>

          <div className="center-image">
            <img src={bgimage2} alt="Warehouse" />
          </div>

          <div className="card-column">
            <div className="service-card"><span className="icon">📦</span><h3>Packaging & Labeling</h3><p>Secure packaging with custom barcoding solutions.</p></div>
            <div className="service-card"><span className="icon">🚀</span><h3>Fast Dispatch</h3><p>Fleet management & route optimization.</p></div>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE HIGHLIGHT */}
      <h2 className="section-title">Our Infrastructure</h2>
      <section className="infrastructure-section">
        <div className="infra-card">
          <img src={infra1} alt="Storage Facility" />
          <h3>Modern Storage Facility</h3>
          <p>High-tech warehouses equipped for optimal storage.</p>
        </div>
        <div className="infra-card">
          <img src={infra2} alt="Forklift Equipment" />
          <h3>Advanced Equipment</h3>
          <p>State-of-the-art forklifts and handling tools.</p>
        </div>
        <div className="infra-card">
          <img src={infra3} alt="Safety Systems" />
          <h3>Safety Systems</h3>
          <p>Ensuring safety with surveillance and automated controls.</p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <h2 className="section-title"><a href="/about">Why Choose Us</a></h2>
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
        </div>
        <div className="get-right">
          <h3>GET TO KNOW US</h3>
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
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Poppins', sans-serif; background: #FAEBEF; color: #333; overflow-x: hidden; }

  /* HERO */
  .home-hero {
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${bgimage}) center/cover no-repeat;
    position: relative;
  }

  .home-hero::before, .home-hero::after {
    content: "";
    position: absolute;
    top:0; left:0; right:0; bottom:0;
    width:100%; height:100%;
  }

  .home-hero::before {
    background-image: url(${bgimage});
    background-size: cover;
    background-position: center;
    filter: blur(3px) brightness(50%);
    z-index: 0;
  }

  .home-hero::after {
    background: rgba(0,0,0,0.4);
  }

  .hero-inner {
    position: relative;
    z-index: 2;
    background: #FAEBEF;
    padding: 40px 30px;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 6px 25px rgba(0,0,0,0.2);
    max-width: 90%;
  }

  .hero-inner h1 {
    font-size: 2.5rem;
    color: #333D79;
    border-bottom: 1px solid #02020264;
    padding: 20px;
  }

  .h_button button {
    margin-top: 20px;
    padding: 12px 24px;
    font-size: 1.1rem;
    border-radius: 30px;
    background: #333D79;
    border: none;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
  }

  .h_button button:hover { background: #0a8bb8; }
  .h_button button a { color: #fff; text-decoration: none; }

  /* SECTIONS */
  .section-title a{
  text-decoration: none;
  }

  .section-title a:active{
  color: #0a8bb8;
  }
  .section-title { text-align: center; font-size: 2.4rem; margin: 60px 0 30px; color: #333D79; }

  .home-infor {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: auto;
    padding: 20px;
  }

  .cards-image-wrapper {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 30px;
    width:100%;
    justify-items: center;
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
    max-width: 320px;
    width: 100%;
  }

  .service-card .icon { font-size: 48px; margin-bottom: 12px; }
  .service-card h3 { color: #333D79; margin-bottom:10px; }
  .service-card p { color: #333; line-height: 1.6; }

  .center-image img { width: 100%; max-width: 400px; border-radius: 15px; margin-top:25%; margin-bottom:25%; }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(260px,1fr));
    gap:25px;
    max-width:1200px;
    margin:auto;
    padding:20px;
  }

  .feature-card {
    background:#f7f7f7;
    padding:25px;
    border-radius:12px;
    text-align:center;
    transition:0.3s;
  }

  .feature-card:hover {
    transform: translateY(-10px);
    background:#333D79;
    color:#fff;
  }

  .call-box {
    margin-top:20px;
    background:#333D79;
    color:#fff;
    padding:16px 24px;
    border-radius:10px;
    font-weight:600;
    cursor:pointer;
  }

  .call-box:hover { background:#0a8bb8; }

  /* GET TO KNOW US */
.get-to-know {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 60px;
  max-width: 1200px;
  margin: 80px auto;
  padding: 20px;
}

.get-left {
  position: relative;
}

.get-left img.big {
  width: 330px;
  border-radius: 12px;
}

.get-right {
  max-width: 520px;
}

.get-right h3 {
  color: #000000;
  margin-bottom: 10px;
  font-weight: 600;
}

.get-right h2 {
  margin-bottom: 15px;
  color: #333D79;
  font-size: 28px;
}

.call-box {
  margin-top: 20px;
  background: #333D79;
  color: #fff;
  padding: 16px 24px;
  border-radius: 8px;
  font-weight: 600;
 cursor: pointer;
  transition: 0.3s;
  display: inline-block;   /* ✔ prevents full width */
  width: auto;             /* ✔ only as wide as text */
  max-width: fit-content; 
}

.call-box:hover {
  background: #0075b5;
}

  /* INFRASTRUCTURE SECTION */
  .infrastructure-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
  }

  .infra-card {
    background: #fff;
    padding: 20px;
    border-radius: 12px;
    text-align: center;
    max-width: 320px;
    width: 100%;
    box-shadow: 0 6px 22px rgba(0,0,0,0.1);
    transition: transform 0.3s;
  }

  .infra-card img {
    width: 100%;
    border-radius: 12px;
    margin-bottom: 15px;
  }

  .infra-card h3 { color: #333D79; margin-bottom: 10px; }
  .infra-card p { color: #333; line-height: 1.5; }

  .infra-card:hover { transform: translateY(-8px); }

  /* RESPONSIVE */
  @media (max-width: 1024px) {
    .service-intro, .get-to-know { flex-direction: column; text-align:center; }
    .center-image img { max-width: 350px; }
    .infrastructure-section { gap: 20px; }
    .infra-card { max-width: 45%; }
  }

  @media (max-width: 820px) {
    .cards-image-wrapper { display:flex !important; flex-direction:column !important; align-items:center; gap:20px; }
    .features-grid { grid-template-columns:1fr 1fr; }
    .hero-inner h1 { font-size:2rem; }
  }

  @media (max-width: 768px) {
    .infrastructure-section { flex-direction: column; align-items: center; }
    .infra-card { max-width: 90%; }
  }

  @media (max-width: 600px) {
    .hero-inner h1 { font-size:1.7rem; }
    .service-card { max-width:100%; }
    .center-image img { max-width:100%; }
    .features-grid { grid-template-columns:1fr; }
    .get-left img.small { max-width:150px; }
  }

  @media (max-width: 480px) {
    .hero-inner h1 { font-size:1.5rem; }
    .h_button button { padding:10px 16px; font-size:0.9rem; }
  }

  @media (max-width: 360px) {
    .hero-inner h1 { font-size:1.2rem; }
    .h_button button { padding:6px 12px; font-size:0.8rem; }
  }
`;
