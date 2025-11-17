// Services.jsx (Updated with 4 Cards + Responsive + Animation)
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../Styles/Services.css";
import S1 from "./Images/S1.jpg";
import S2 from "./Images/S2.jpg";
import S3 from "./Images/S3.jpg";
import S4 from "./Images/S4.jpg";
import S5 from "./Images/S5.jpg";
import S6 from "./Images/S6.jpg";
import S7 from "./Images/S7.jpg";
import S8 from "./Images/S8.jpg";


const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>Warehouse Services</h1>
      </section>

      {/* Dedicated Warehousing */}
      <section className="service-section">
        <div className="image">
          <img src={S1} alt="Warehousing" />
        </div>
        <div className="text">
          <h2>Dedicated Warehousing</h2>
          <p>
            A solution for customers needing exclusive storage and value-added warehouse services with skilled manpower, advanced equipment, and WMS support.
          </p>
        </div>
      </section>

      {/* Multi User Facilities */}
      <section className="service-section reverse">
        <div className="image">
          <img src={S2} alt="Multi User Facilities" />
        </div>
        <div className="text">
          <h2>Multi-User Facilities</h2>
          <p>
            Shared and scalable warehousing solutions that reduce distribution costs and increase operational efficiency.
          </p>
        </div>
      </section>

      {/* Warehouse Services Cards */}
      <section className="warehouse-cards">
        <h2 className="center-title">Warehouse Services</h2>
        <div className="services-container">
          {[
            {
              img: S3,
              title: "Storage Optimization",
              desc: "Maximized racking, pallet organization, and optimized warehouse flow.",
            },
            {
              img: S4,
              title: "Material Handling",
              desc: "Safe and efficient movement of goods using modern equipment.",
            },
            {
              img: S5,
              title: "Quality Checks",
              desc: "Inspection and QC procedures for inbound and outbound shipments.",
            },
            {
              img: S6,
              title: "Warehouse Security",
              desc: "24/7 CCTV monitoring, controlled access & secure storage zones.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={card.img} alt={card.title} />
              <h2>{card.title}</h2>
              <p>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Two Main Centers */}
      <h2 className="center-title">Two Main Centers</h2>
      <section className="services-container">
        <motion.div
          className="service-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <img src={S7} alt="Fulfillment" />
          <h2>Fulfillment Centers</h2>
          <p>
            Fast and cost-effective storage, sortation, and order fulfillment located near key consumer hubs.
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
          <img src={S8} alt="Distribution" />
          <h2>Distribution Centers</h2>
          <p>
            Efficient inventory movement and streamlined dispatches positioned near industry hubs.
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


