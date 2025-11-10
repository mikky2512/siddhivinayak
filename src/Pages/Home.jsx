import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
.home-hero {
  min-height: 80vh;
  display:flex;
  align-items:center;
  justify-content:center;
  position:relative;
  color: #EFECE3;
  background-color: #8FABD4;
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
  font-size:42px;
  margin:0 0 10px;
  vertical-align: text-top;
  background-color: #151e1c87
}

.hero-inner p{ color: #fffefeff; opacity:0.9; }
.headline {
background-color: #151e1c87
}
.subheadline {
background-color: #151e1c87
}
`;

function Home() {
  return (
    <section className="home-hero">
      <div className="hero-inner">
        <GlobalStyle />
        <h1>Welcome to My Website</h1>
        <section class="headline">
        <h3> Headline:</h3>
        <p>Power. Precision. Performance.</p>
        </section>
        <section class="subheadline">
        <h3>Subheadline:</h3>
        <p>Your trusted partner for reliable forklifts, seamless lifting solutions, and unmatched service support.</p>
        </section>
        <div class="h_button">
          <button type="button">
        <a href="/contact">Get in touch</a>
        </button>
        </div>
      </div>
    </section>
  );
}

export default Home;

