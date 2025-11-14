import React from "react";
import { createGlobalStyle } from "styled-components";
import bgimage from "./Images/hea.jpg";
import bgimage1 from "./Images/w1.jpg";
import bgimage2 from "./Images/w2.jpg";
import bgimage3 from "./Images/w4.jpg";

function Home() {
  return (
     <div className="home-info">
    <section className="home-hero">
      <div className="hero-inner">
        <GlobalStyle />
       <h1>Forklift Solutions to Elevate Your Operations</h1>
        <h3> Headline:</h3>
        <p>Power. Precision. Performance.</p>
        <h3>Subheadline:</h3>
        <p>Your trusted partner for reliable forklifts, seamless lifting solutions, and unmatched service support.</p>
        <div className="h_button">
          <button type="button">
        <a href="/contact">Get in touch</a>
        </button>
        </div>
      </div>
    </section>
    <div className="home">  </div>
       {/* About */}

     <section className="home-infor" flex="3">
    <p>Crafting Precision Solutions for Your Unique Needs.</p>
    <h2>Our Solutions Tailored to You</h2>

    
    <div className="card-group">
  <div className="card">
     <img 
     src={bgimage2} 
     alt="forklift1" 
     />
    <div className="card-body">
      <h3>Forklift Sales</h3>
      <p>High-quality forklifts for all warehouse and industrial needs. Durable, powerful, and built for daily heavy use.Upgrade your material handling with powerful and efficient forklifts at the best prices.</p>
      </div>
  </div>
  <div className="card">
     <img 
     src={bgimage1} 
     alt="forklift2"
     />
    <div className="card-body">
      <h3 >Forklift rentals</h3>
      <p >Flexible rental plans for daily, weekly, or monthly needs. Rent high-performance forklifts for any warehouse or industrial operation—whenever you need them.</p>
       </div>
  </div>
  <div className="card">
     <img 
     src={bgimage3} 
     alt="forklift3"
     />
    <div className="card-body">
      <h3 >Service and Spare Parts</h3>
      <p >Reliable maintenance with genuine parts for all forklift models. Keep your forklifts running smoothly with expert servicing and original spare parts.</p>
       </div>
  </div>
</div>
        </section>
    </div>
  );
}

export default Home;
const GlobalStyle = createGlobalStyle`
.home-hero::before{
content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${bgimage});
  background-size: cover;
  background-position: center;
  filter: blur(3Px) brightness(80%);
  z-index: 0;
}
 
.home-hero {
  display:flex;
  align-items:center;
  justify-content:center;
  position:relative;
  padding-bottom: 40px;
  color: #000000ff;
  text-align:center;
}
.home-hero::after{
  content:"";
  position:absolute;
  inset:0;
 }

.hero-inner {
  position: relative;
  z-index: 1;
  max-width: 900px;
  padding: 60px 40px;
  background: rgba(211, 203, 203, 0.4);
  border-radius: 20px;
  backdrop-filter: blur(6px);
  box-shadow: 0 4px 40px rgba(0,0,0,0.3);
}
.home-infor p{
text-align: center;
  margin:0 0 10px;
}
  .home-infor h2{
text-align: center;
  margin:0 0 10px;
}
.home-infor .card-group {
  display: flex;
  gap: 40px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
}

.home-infor .card {
  width: 320px;
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  transition: 0.3s ease;
}

.home-infor .card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 35px rgba(0,0,0,0.20);
}

.home-infor img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.home-infor .card-body {
  padding: 20px;
  text-align: left;
}
.hero-inner h1 {
  font-weight: 700;
  letter-spacing: -1px;
}

.hero-inner p {
  line-height: 1.6;
}
   .hero-inner h2{
  text-align: center;
  margin:0 0 10px;
  vertical-align: text-top;  
}
.h_button button {
  padding: 14px 26px;
  font-size: 1.1rem;
  border-radius: 30px;
  background: #ffd500;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;
}

.h_button button:hover {
  transform: translateY(-3px);
  background: #ffce00;
}

.h_button button a {
  color: #000;
  text-decoration: none;
}
@media (max-width: 600px) {
  .hero-inner {
    padding: 30px 20px;
    border-radius: 12px;
  }

  .home-info .card {
    width: 90%;
  }
}
  
`;
