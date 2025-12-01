import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import "./App.css";
import Fulfillment from "./Pages/Fulfillment";
import Distribution from "./Pages/Distribution";
import Blogs from "./Pages/Blogs";
import ScrollToTop from "./Components/ScrollToTop"; 


function App() {
  return (
    <div className="app">
      <Router>

        <ScrollToTop />   {/* ✅ Added here — correct location */}

        <Navbar />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />}/>
            <Route path="/testimonials" element={<testimonials />}/>
            <Route path="/services/fulfillment" element={<Fulfillment />} />
            <Route path="/services/distribution" element={<Distribution />} />
            <Route path="/blogs" element={<Blogs />}/>
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
