// Services.jsx
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
import S9 from "./Images/S9.jpg";
import HeroImg from "./Images/S.jpg";   // ⭐ Add your hero image


const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Services = () => {
  return (
    <div className="services-page">

      {/* ⭐ HERO SECTION WITH IMAGE + ANIMATION */}
      <section className="hero">

        <motion.img
          src={HeroImg}
          alt="Warehousing"
          className="hero-img"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Services
        </motion.h1>
      </section>

      {/* 1️⃣ Dedicated Warehousing */}
      <motion.section
        className="service-section"
        initial="initial"
        whileInView="whileInView"
        transition="transition"
        variants={fadeUp}
      >
        <div className="image">
          <img src={S1} alt="Warehousing" />
        </div>

        <div className="text">
          <h1>Dedicated Warehousing</h1>
          <p>
            A solution for customers needing exclusive storage and value-added warehouse
            services with skilled manpower, advanced equipment, and WMS support.
          </p>
        </div>
      </motion.section>

      {/* ⭐ 2️⃣ NEW CARD */}
      <motion.section
        className="service-section reverse"
        initial="initial"
        whileInView="whileInView"
        transition="transition"
        variants={fadeUp}
      >
        <div className="image">
          <img src={S2} alt="Inventory Management" />
        </div>

        <div className="text">
          <h1>Inventory Management</h1>
          <p>
            Real-time stock visibility, automated reports, stock accuracy processes, and 
            cycle counting with WMS support.
          </p>
        </div>
      </motion.section>

      {/* 3️⃣ Multi-User Facilities */}
      <motion.section
        className="service-section"
        initial="initial"
        whileInView="whileInView"
        transition="transition"
        variants={fadeUp}
      >
        <div className="image">
          <img src={S3} alt="Multi User Facilities" />
        </div>

        <div className="text">
          <h1>Multi-User Facilities</h1>
          <p>
            Shared and scalable warehousing solutions that reduce distribution costs 
            and increase operational efficiency.
          </p>
        </div>
      </motion.section>

      {/* ------------- Warehouse Services Cards ------------- */}
      <section className="warehouse-cards">
        <h2 className="center-title">Warehouse Services</h2>

        <div className="services-container">
          {[ 
            { img: S4, title: "Storage Optimization", desc: "Maximized racking and optimized warehouse flow." },
            { img: S5, title: "Material Handling", desc: "Safe and efficient movement of goods with modern equipment." },
            { img: S6, title: "Quality Checks", desc: "Inspection procedures for inbound & outbound shipments." },
            { img: S7, title: "Warehouse Security", desc: "24/7 CCTV, access control and secure zones." },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={card.img} alt={card.title} />
              <h2>{card.title}</h2>
              <p>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- TWO MAIN CENTERS ---------- */}
      <h2 className="center-title">Two Main Centers</h2>

      <section className="services-container">
        
        <motion.div
          className="service-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <img src={S8} alt="Fulfillment" />
          <h2>Fulfillment Centers</h2>
          <p>Fast and cost-effective storage, sortation and fulfillment.</p>
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
          <img src={S9} alt="Distribution" />
          <h2>Distribution Centers</h2>
          <p>Efficient inventory movement and smooth dispatch.</p>
          <Link to="/Services/Distribution" className="learn-more-btn">
            Learn More →
          </Link>
        </motion.div>
      </section>

    </div>
  );
};

export default Services;
