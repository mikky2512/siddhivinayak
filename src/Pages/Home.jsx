import React from "react";
import { createGlobalStyle } from "styled-components";
import bgimage from "./Images/hea.jpg";
import bgimage1 from "./Images/w1.jpg";
import bgimage2 from "./Images/w2.jpg";

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
    
       {/* About */}

     <section className="home-info" flex="2">
    <h3>Crafting Precision Solutions for Your Unique Needs.</h3>
    <h2>Our Solutions Tailored to You</h2>

    
    <div className="card-group">
  <div className="card">
     <img 
     src={bgimage2} 
     alt="forklift1" 
     />
    <div className="card-body">
      <h5>Card title</h5>
      <p>This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
  </div>
  <div className="card">
     <img 
     src={bgimage1} 
     alt="forklift2"
     />
    <div className="card-body">
      <h5 >Card title</h5>
      <p >This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
       </div>
  </div>
</div>
        </section>
    </div>
  );
}

export default Home;
const GlobalStyle = createGlobalStyle`
.home {
text-align:center;
}
.home-hero {
  display:flex;
  align-items:center;
  justify-content:center;
  position:relative;
  color: #e4eaeaff;
  text-align:center;
}
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
  filter: blur(3Px) brightness(50%);
  z-index: 0;
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
 color: #fffefeff;
  opacity:0.9;
 }
 .hero-inner h3{
  text-align: center;
  margin:0 0 10px;
  vertical-align: text-top;  
}
  .h_button button {
  padding: 12px 20px;
  font-size: 1rem;
  border-radius: 5px;
}
.h_button button a {
  color: black;
  text-decoration: none;
  display: block;
}

  .home-info {
  flex: 3;
}

.home-info .card-group {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .home-info .card {
    max-width: 50%;
    margin: 0 auto;
  }

.home-info .card-body:hover {
  transform: translateY(-2px);
}

.home-info img {
  width: 50%;
  border-radius: 2px;
  margin-bottom: 3px;
}
/* Then media queries for tablets and up */
  @media (min-width: 600px) {
    .home-info .card-group {
      flex-direction: row;
      justify-content: center;
    }
    .home-info .card-image {
  width: 30px;
  height: 50px;
  object-fit: cover; /* Maintains aspect ratio and fills the space */
  border-radius: 3px; /* Optional styling */
}
    }
  }
  /* Existing laptop media query */
  @media (min-width: 769px) {
    main {
      flex-direction: row;
    }
    .content {
      width: 70%;
    }
    .sidebar {
      width: 30%;
      display: block;
    }
  }
    /* Existing laptop media query */
  @media (min-width: 600px) {
    main {
      flex-direction: row;
    }
    .content {
      width: 70%;
    }
    .sidebar {
      width: 30%;
      display: block;
    }
  }
  
`;
