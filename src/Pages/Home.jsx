import React from "react";
import { createGlobalStyle } from "styled-components";
import bgimage from "./Images/hea.jpg";
import bgimage1 from "./Images/w1.jpg";
import bgimage2 from "./Images/w2.jpg";
import bgimage3 from "./Images/w4.jpg";
import bgimage4 from "./Images/w5.jpg";
import bgimage5 from "./Images/w6.jpg";
import bgimage6 from "./Images/w7.jpg";

function Home() {
  return (
     <div className="home-info">
    <section className="home-hero">
      <div className="hero-inner">
        <GlobalStyle />
       <h1>
        Forklift Solutions <br />
        <span>to Elevate</span> <br />
        <span>Your Operations</span> <br />
        </h1>
        <p><b><i>Forklifts are essential machines used for lifting and moving heavy materials in warehouses, factories, and industrial sites. They help improve work efficiency, reduce manual effort, and ensure safe handling of goods.</i></b></p>
        <p><i>Forklifts play a vital role in modern industries by ensuring smooth handling of heavy goods.</i></p>
        <p>A forklift is a powerful industrial vehicle used to lift, move, and transport heavy materials with ease. Commonly used in warehouses, factories, construction sites, and logistics hubs, forklifts improve efficiency, safety, and productivity. Available in various types like diesel, electric, and LPG, they are designed to handle different load capacities and working environments.</p>
        <div className="h_button">
          <button type="button">
        <a href="/contact">Get in touch</a>
        </button>
        </div>
      </div>
    </section>
       {/* About */}
<br />
     <section className="home-infor" flex="3">
    <h3>Crafting Precision Solutions for Your Unique Needs.</h3>
    <h2>Our Solutions Tailored to You</h2>

    
    <div className="card-group">
  <div className="card">
     <img 
     src={bgimage1} 
     alt="forklift1" 
     />
    <div className="card-body">
      <h3>Forklift Sales</h3>
      <p>High-quality forklifts for all warehouse and industrial needs. Durable, powerful, and built for daily heavy use.Upgrade your material handling with powerful and efficient forklifts at the best prices.</p>
      </div>
  </div>
  <div className="card">
     <img 
     src={bgimage2} 
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
  <br />
  {/* section of service */}
  <section className="service-intro">
    <div className="service-left">
<img src={bgimage6} alt="big-forklift" className="big-forklift"/>
</div>
<div className="serivce-right">
  <h1>
      Providing Premier Forklift <br />
      <strong>Sales, Services, and Parts</strong> <br />
      to Businesses Across India.
  </h1>
    <ul>
      <li>Fixing all forklift makes and models for reliable performance.</li>
      <li>Daily, weekly, and monthly rental options.</li>
      <li>New and reconditioned forklifts for every budget.</li>
      <li>Battery & charger solutions + repair services.</li>
      <li>Financing options for new equipment.</li>
      <li>Repairs in diesel, LPG, and electric forklifts.</li>
      <li>Stocked parts for all forklift brands.</li>
      <li>Premium Forklift Solutions Across India</li>
    </ul>
</div>
    
  </section>
    {/* NEW SECTION LIKE THE DEMO WEBSITE IMAGE */}
<section className="about-forklift">
  <div className="about-left">
<img src={bgimage4} alt="Worker" className="main-worker" />
<div className="small-lift-box">
<img src={bgimage5} alt="Forklift Small" />
</div>
</div>
<div className="about-right">
<h1 className="tag">GET TO KNOW US</h1>
<h1>Welcome to Forklift Rent and Services</h1>
<p>
We specialize in providing top‑notch solutions for all your forklift
needs. With years of expertise in the industry, we understand the
importance of efficiency, safety, and reliability in material handling
operations.
</p>
<p className="bold-text">
We have 20+ years of experience in forklift and forklift services.
</p>
<div className="call-box">
<span className="call-icon">📞</span>
<p>
Have any question? Give us a call <br />
<strong>+91 90334 76660</strong>
</p>
</div>

</div>
</section>
<br />
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
  backdrop-filter: blur(4px);
  box-shadow: 0 4px 40px rgba(0,0,0,0.3);
}
.home-infor h3{
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
  font-size:60;
  letter-spacing: -1px;
}

.hero-inner p {
  line-height:2;
}
   .hero-inner h3{
  text-align: center;
  margin:0 0 10px;
  vertical-align: text-top;  
}
.h_button button {
  padding: 14px 26px;
  font-size: 1.1rem;
  border-radius: 30px;
  background: #12b2ecff;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;
}

.h_button button:hover {
  transform: translateY(-3px);
  background: #12b2ecff;
}

.h_button button a {
  color: #000000ff;
  text-decoration: none;
}
/* NEW ABOUT SECTION */
.about-forklift {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  text-align: center;
}

.main-worker {
width: 380px;
border-radius: 16px;

}
.about-left {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.small-lift-box {
position: absolute;
  bottom: -40px;
  right: -40px;
background: #ffffffff;
padding: 10px;
border-radius: 12px;
box-shadow: 0 4px 20px rgba(0,0,0,0.2);
}

.small-lift-box img {
width: 160px;
border-radius: 10px;

}
.about-right {
  text-align: center;
  margin: 0 auto;
}


.about-right h1 {
font-size: 2rem;
font-weight: 700;
}

.tag {
color: #3949ab;
font-weight: 600;
margin-bottom: 10px;
text-align: center; /* centered text */
 /* ensure block alignment */
width: 100%; /* full width for perfect centering */
}

.bold-text {
font-weight: 700;
margin: 15px 0;
}

.call-box {
display: flex;
align-items: center;
background: #e8ffe8;
padding: 12px 20px;
border-radius: 8px;
margin: 10px 0;
}

.call-icon {
font-size: 2rem;
color: #00b300;
}

.explore-btn {
padding: 12px 28px;
border: none;
background: #000;
color: #fff;
border-radius: 8px;
cursor: pointer;
font-weight: 600;
transition: 0.3s;
}

.explore-btn:hover {
background: #333;
}

/* NEW SERVICE   SECTION */
/* DEMO STYLE SECTION */
.service-intro {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
  width: 100%;
  margin: 0 auto;
  gap: 40px;
  background: #4bc8f6ee; /* light peach background like demo */
}

.service-left img.big-forklift {
  width: 500px;
    bottom: -40px;
  right: -40px;
  border-radius: 8px;
}

.service-right {
  max-width: 600px;
}

.service-right h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.4;
}

.service-right ul {
  text-align: left;
  list-style-type: disc;
  margin-left: 20px;
  font-size: 1.1rem;
  line-height: 1.8;
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
