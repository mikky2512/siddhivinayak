import React from "react";
import { createGlobalStyle } from "styled-components";
import bgimage from "./Images/hea.jpg";

const GlobalStyle = createGlobalStyle`
.home-hero {
  min-height: 80vh;
  display:flex;
  align-items:center;
  justify-content:center;
  background-image: url(${bgimage});
  background-size: contain;
  background-position: center;
  position:relative;
  color: #000000ff;
  background-color: #aa9f9fff;
  text-align:center;
}

.home-hero::after{
  content:"";
  position:absolute;
  inset:0;
  
 }

.hero-inner{
  position:relative;
  z-index:1;
  max-width:900px;
  padding:30px;

}

.hero-inner h1{
text-align: center ;
  font-size:50px;
  margin:0 0 10px;
  vertical-align: text-top;
  }

.hero-inner p{
text-align: center;
 color: #101010ff;
  opacity:0.9;
 }
 .hero-inner h3{
  text-align: center;
  margin:0 0 10px;
  vertical-align: text-top;  
}

`;

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
        <div class="h_button">
          <button type="button">
        <a href="/contact">Get in touch</a>
        </button>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Home;

