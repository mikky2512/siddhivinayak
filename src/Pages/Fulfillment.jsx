
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../Styles/Fulfillment.css";

const tableData = [
  {
    step: 1,
    process: "Receive",
    description: "Accept incoming goods from suppliers",
    outcome: "Verified inventory",
  },
  {
    step: 2,
    process: "Process",
    description: "Verify order details and prepare customer orders",
    outcome: "Orders ready for picking",
  },
  {
    step: 3,
    process: "Pick",
    description: "Collect items from storage",
    outcome: "Correct items selected",
  },
  {
    step: 4,
    process: "Warehouse",
    description: "Store efficiently and manage inventory",
    outcome: "Organized stock control",
  },
  {
    step: 5,
    process: "Pack",
    description: "Safely package products for shipment",
    outcome: "Safe and labeled parcel",
  },
  {
    step: 6,
    process: "Ship",
    description: "Deliver to customer",
    outcome: "Successful delivery",
  },
];

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

          {/* ---- Table Section ---- */}
      <div className="table-section">
        <h2 className="table-title">Fulfillment Process Summary</h2>
        <div className="table-container">
          <table className="process-table">
            <thead>
              <tr>
                <th>Step</th>
                <th>Process Name</th>
                <th>Description</th>
                <th>Key Outcome</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, i) => (
                <tr key={i}>
                  <td>{row.step}</td>
                  <td>{row.process}</td>
                  <td>{row.description}</td>
                  <td>{row.outcome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Link to="/services" className="back-btn">
        ← Back to Services
      </Link>
    </motion.div>

    
  );
};

export default Fulfillment;
