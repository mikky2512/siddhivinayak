import React from "react";
import Testimonials from "./testimonials";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
.about-page {
  color: #fff;
  background: #111;
}

.about-hero {
  
  padding: 120px 50px;
  text-align: center;
  position: relative;
  background-color: #8FABD4;
}

.about-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.55);
}

.about-hero h1, .about-hero p {
  position: relative;
  z-index: 1;
}

.about-content {
  padding: 50px;
  text-align: center;
  max-width: 850px;
  margin: auto;
  background-color: #4A70A9;
}

.about-gallery {
  padding: 50px;
  text-align: center;
}

.gallery-grid {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.gallery-grid img {
  width: 300px;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
}
`;

function About() {
  const myCustomData = [
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

      <section className="about-hero">
        <GlobalStyle />
        <h1>Our Company</h1>
        <p>We are a dedicated team committed to delivering high-quality work in every
          project we undertake. Our goal is to ensure customer satisfaction through
          innovation, expertise, and passion.</p>
      </section>

      <section className="about-content">
        <h2>Who We Are</h2>
        <p>
          “Total Transport is a leading logistics company in India and has been a 
          backbone in keeping the Indian logistics sector strong. We remain committed
           to employing the latest technologies and human expertise to maintain global 
           connectivity for the exchange of goods.”
          
        </p>
      </section>
      <section>
        <p> 
         {/* ✅ Linking Testimonials component and passing custom data */}
        <Testimonials testimonials={myCustomData} />
        </p>
      </section>

    </div>
  );
}

export default About;
