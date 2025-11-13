import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; 
import "../Styles/Distribution.css";

const DistributionPages = () => {
  return (
    <motion.div
      className="distribution-page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Distribution Centers</h1>
      <p>
        Our distribution centers ensure efficient storage, inventory management,
        and product delivery across multiple regions. By optimizing routes and
        transportation schedules, we provide faster and more reliable delivery
        to your customers.
      </p>
      <Link to="/services" className="back-btn">
        ← Back to Services
      </Link>
    </motion.div>
  );
};

export default DistributionPages;
