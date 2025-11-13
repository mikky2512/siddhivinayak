import React from "react";

import F1 from './Images/F1.jpg';
import F2 from './Images/F2.jpg';
import F3 from './Images/F3.jpg';
import F4 from './Images/F4.jpg';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../Styles/Services.css";
import "./Distribution";
import "./Fulfillment";

const Services= () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>Warehouse Facility</h1>
      </section>

      {/* Dedicated Warehousing */}
      <section className="service-section">
        <div className="image">
          <img
            src={F1}
            alt="Warehousing"
          />
        </div>
        <div className="text">
          <h2>Dedicated Warehousing</h2>
          <p>
            A solution for customers who need exclusive storage and related
            value-added warehouse service. Our dedicated services offer
            advantages like skilled manpower, quality capital equipment, and WMS
            serve businesses across industries.
          </p>
        </div>
        
      </section>

      {/* Multi-User Facilities */}
      <section className="service-section reverse">
        <div className="image">
          <img
            src={F2}
            alt="Multi User Facilities"
          />
        </div>
        <div className="text">
          <h2>Multi-User Facilities</h2>
          <p>
            Our Multi-User Facilities provide businesses shared and scalable
            warehousing that translates to big savings in distribution cost and
            gains in efficiency.
          </p>
        </div>
      </section>

      {/* Fulfillment & Distribution Centers */}
      
        <section className="services-container">
        <motion.div
          className="service-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <img src= {F3} alt="Fulfillment" />
          <h2>Fulfillment Centers</h2>
          <p>
            Our nationwide fulfillment centers provide fast and cost-effective
            storage, sortation, and order fulfillment near major consumption hubs.
          </p>
          <Link to="/Services/Fulfillment" className="learn-more-btn">
            Learn More →
          </Link>
        </motion.div>

        <motion.div
          className="service-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img src= {F4} alt="Distribution" />
          <h2>Distribution Centers</h2>
          <p>
            Our distribution centers near key consumer and industry hubs ensure
            efficient inventory management and smooth shipment flow.
          </p>
          <Link to="/Services/Distribution" className="learn-more-btn">
            Learn More →
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
