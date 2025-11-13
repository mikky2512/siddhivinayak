
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../Styles/Fulfillment.css";

const Fulfillment = () => {
  return (
    <motion.div
      className="fulfillment-page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Fulfillment Centers</h1>
      <p>
        Our fulfillment centers are strategically located to provide faster order
        processing and efficient logistics. We handle everything — from inventory
        management and storage to packaging and delivery — ensuring a seamless
        experience for clients.
      </p>
      <Link to="/services" className="back-btn">
        ← Back to Services
      </Link>
    </motion.div>
  );
};

export default Fulfillment;
