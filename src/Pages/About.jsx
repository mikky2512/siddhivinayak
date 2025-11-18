import React, { useEffect } from "react";
import Testimonials from "./testimonials";
import AOS from "aos";
import "aos/dist/aos.css";
import { createGlobalStyle } from "styled-components";
import A1 from "./Images/A1.jpg";
import A2 from "./Images/A2.jpg";
const GlobalStyle = createGlobalStyle`
.about-page {
  font-family: "Poppins", sans-serif;
  background: #fff;
  color: #333;
  overflow-x: hidden;
}

/* HERO SECTION */
.about-hero {
  height: 70vh;
  background: url("https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1500&q=80")
    center/cover no-repeat;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  animation: fadeIn 1.5s ease-in-out;
}

.about-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.55);
}

.about-hero h1 {
  color: #fff;
  position: relative;
  font-size: 3rem;
  z-index: 2;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
}

/* SECTION TITLE */
.section-title {
  text-align: center;
  font-size: 2.4rem;
  font-weight: 600;
  margin-top: 60px;
  margin-bottom: 25px;
  animation: fadeUp 1s ease-in-out;
}

/* CONTENT BLOCKS */
.about-section {
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 50px 20px;
  max-width: 1200px;
  margin: auto;
}

.about-section img {
  width: 50%;
  border-radius: 12px;
  box-shadow: 0 8px 22px rgba(0,0,0,0.2);
  transition: 0.4s ease;
}

.about-section img:hover {
  transform: scale(1.03);
}

.about-text {
  width: 50%;
  animation: fadeIn 1s ease-in-out;
}

.about-text h3 {
  font-size: 1.8rem;
  margin-bottom: 18px;
}

.about-text p {
  color: #555;
  line-height: 1.7;
  font-size: 1.1rem;
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
  background: #f7f7f7;
  padding: 28px;
  border-radius: 12px;
  text-align: center;
  transition: 0.3s ease;
  border: 1px solid #eee;
  animation: fadeUp 1s ease-in-out;
}

.feature-card:hover {
  transform: translateY(-10px);
  background: #111;
  color: #fff;
}

/* KEYFRAME ANIMATIONS */
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.97); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .about-section {
    flex-direction: column;
    text-align: center;
  }

  .about-section img,
  .about-text {
    width: 100%;
  }

  .about-hero h1 {
    font-size: 2.2rem;
  }
}
`;

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const testimonialData = [
    {
      id: 1,
      name: "Aarav Patel",
      role: "CEO, TechNova",
      image: "https://randomuser.me/api/portraits/men/40.jpg",
      quote: "Working with this team has been an absolute pleasure!",
    },
    {
      id: 2,
      name: "Neha Sharma",
      role: "Creative Director, DesignCo",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
      quote: "Their creativity and dedication are unmatched!",
    },
  ];

  return (
    <div className="about-page">
      <GlobalStyle />

      {/* HERO */}
      <section className="about-hero" data-aos="zoom-in">
        <h1>About Us</h1>
      </section>

      {/* WHO WE ARE */}
      <h2 className="section-title">Who We Are</h2>
      <section className="about-section" data-aos="fade-right">
        <img
          src= {A1}
          alt="warehouse"
        />
        <div className="about-text">
          <h3>Your Trusted Transport & Logistics Partner</h3>
          <p>
            Total Transport is one of India's most reliable logistics companies, offering
            seamless and cost-efficient supply chain solutions. Our strong fleet, advanced
            technology, and experienced team make us capable of handling all types of
            transportation and warehousing needs.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <h2 className="section-title">Our Mission</h2>
      <section className="about-section" data-aos="fade-left">
        <div className="about-text">
          <h3>Committed to Excellence</h3>
          <p>
            Our mission is to deliver fast, secure, and efficient logistics solutions with
            complete transparency. We aim to build long-term trust with clients by
            providing professional services backed by modern tracking and safety systems.
          </p>
        </div>

        <img
          src= {A2}
          alt="mission"
        />
      </section>

      {/* WHY CHOOSE US */}
      <h2 className="section-title">Why Choose Us</h2>

      <div className="features-grid">
        <div className="feature-card" data-aos="zoom-in">
          <h4>✔ Professional Team</h4>
          <p>Skilled staff committed to high-quality service.</p>
        </div>

        <div className="feature-card" data-aos="zoom-in">
          <h4>✔ Fast Delivery</h4>
          <p>Timely delivery with real-time tracking.</p>
        </div>

        <div className="feature-card" data-aos="zoom-in">
          <h4>✔ 24/7 Customer Support</h4>
          <p>Always ready to assist your logistics needs.</p>
        </div>

        <div className="feature-card" data-aos="zoom-in">
          <h4>✔ Safe & Secure</h4>
          <p>Strict safety control at every stage of transport.</p>
        </div>
      </div>

      {/* TESTIMONIALS (unchanged) */}
      <Testimonials testimonials={testimonialData} />
    </div>
  );
}

export default About;
