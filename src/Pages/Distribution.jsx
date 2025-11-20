import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../Styles/Distribution.css";

import DC from "./Images/DC.jpg";
import D2 from "./Images/D2.jpg";
import D3 from "./Images/D3.jpg";
import D4 from "./Images/D4.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const DistributionPages = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="distribution-page"
      initial="hidden"
      animate="visible"
    >

      {/* HERO SECTION */}
      <motion.section
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="hero-img-section"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img src={DC} alt="Distribution Center" className="hero-img" />
        </motion.div>

        <motion.h1 variants={fadeUp}>Distribution Center</motion.h1>
        <motion.p variants={fadeUp} transition={{ delay: 0.2 }}>
          Efficient, Organized, and Built for Speed in Modern Supply Chains
        </motion.p>
      </motion.section>

      {/* WHAT IS A DC SECTION */}
      <motion.section className="section" variants={fadeUp}>
        <motion.div className="content" variants={fadeLeft}>
          <h2>What is a Distribution Center?</h2>
          <p>
            A Distribution Center (DC) is a specialized facility designed to
            receive, store, process, and ship goods efficiently to retailers,
            wholesalers, or directly to customers. It acts as a central hub in
            the supply chain ensuring timely and accurate product delivery.
          </p>
        </motion.div>

        <motion.div className="image" variants={fadeRight}>
          <img src={D2} alt="Distribution Center" />
        </motion.div>
      </motion.section>

      {/* FUNCTIONS SECTION */}
      <motion.section className="section reverse" variants={fadeUp}>
        <motion.div className="content" variants={fadeRight}>
          <h2>Key Functions of a Distribution Center</h2>
          <ul>
            {[
              "Receiving: Inspect and record goods",
              "Storage: Organized product placement",
              "Order Processing: Manage customer orders",
              "Picking & Packing: Collect and pack items",
              "Shipping: Dispatch goods to destinations",
              "Returns Handling: Manage returned items",
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="image" variants={fadeLeft}>
          <img src={D3} alt="Warehouse operations" />
        </motion.div>
      </motion.section>

      {/* IMPORTANCE SECTION */}
      <motion.section className="section" variants={fadeUp}>
        <motion.div className="content" variants={fadeLeft}>
          <h2>Importance in the Supply Chain</h2>
          <p>
            Distribution Centers reduce delivery times, lower transportation
            costs, and improve customer satisfaction. Using automation,
            barcoding, and warehouse management systems (WMS), DCs run with
            precision and speed.
          </p>
        </motion.div>

        <motion.div className="image" variants={fadeRight}>
          <img src={D4} alt="Logistics and Transport" />
        </motion.div>
      </motion.section>

      {/* TABLE SECTION */}
      <motion.section className="table-section" variants={fadeUp}>
        <motion.h1 variants={fadeUp} style={{ textAlign: "center" }}>
          Distribution Center Facilities
        </motion.h1>

        <motion.div
          className="table-responsive"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <table className="styled-table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Facility</th>
                <th>Key Features</th>
                <th>Function</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["Docking Area", "Multiple docks, fast loading", "Quick movement"],
                ["Sorting Zone", "Automated sorting", "Regional dispatch"],
                ["Cross-Docking Zone", "Immediate transfer", "Fast routing"],
                ["Dispatch Area", "Route planning", "Shipment prep"],
                ["Control Room", "GPS, CCTV", "Monitoring"],
              ].map((row, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                >
                  <td>{index + 1}</td>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </motion.section>

    </motion.div>
  );
};

export default DistributionPages;
