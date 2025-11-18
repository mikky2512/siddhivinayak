import React, { useEffect } from "react";
import { motion } from "framer-motion"; 
import "../Styles/Distribution.css";

import D2 from "./Images/D2.jpg";
import D3 from "./Images/D3.jpg";
import D4 from "./Images/D4.jpg";

const DistributionPages = () => {

  // ⭐ Always scroll to top when page opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="distribution-page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >

      {/* HERO SECTION */}
      <section className="hero fade-in">
        <div className="hero-img-section">
          
        </div>
        <h1>Distribution Center</h1>
        <p>Efficient, Organized, and Built for Speed in Modern Supply Chains</p>
      </section>

      {/* ABOUT SECTION */}
      <section className="section slide-up">
        <div className="content">
          <h2>What is a Distribution Center?</h2>
          <p>
            A Distribution Center (DC) is a specialized facility designed to
            receive, store, process, and ship goods efficiently to retailers,
            wholesalers, or directly to customers. It acts as a central hub in
            the supply chain ensuring timely and accurate product delivery.
          </p>
        </div>

        <div className="image">
          <img src={D2} alt="Distribution Center" />
        </div>
      </section>

      {/* FUNCTIONS SECTION */}
      <section className="section reverse slide-up">
        <div className="content">
          <h2>Key Functions of a Distribution Center</h2>
          <ul>
            <li><strong>Receiving:</strong> Inspect and record goods from suppliers.</li>
            <li><strong>Storage:</strong> Organized product placement.</li>
            <li><strong>Order Processing:</strong> Manage customer orders efficiently.</li>
            <li><strong>Picking & Packing:</strong> Collect & pack items securely.</li>
            <li><strong>Shipping:</strong> Dispatch goods to the right destination.</li>
            <li><strong>Returns Handling:</strong> Manage returned or defective items.</li>
          </ul>
        </div>

        <div className="image">
          <img src={D3} alt="Warehouse operations" />
        </div>
      </section>

      {/* IMPORTANCE SECTION */}
      <section className="section slide-up">
        <div className="content">
          <h2>Importance in the Supply Chain</h2>
          <p>
            Distribution Centers reduce delivery times, lower transportation
            costs, and improve customer satisfaction. Using automation,
            barcoding, and warehouse management systems (WMS), DCs run with
            precision and speed.
          </p>
        </div>

        <div className="image">
          <img src={D4} alt="Logistics and Transport" />
        </div>
      </section>

      {/* FACILITIES TABLE */}
      <section className="table-section slide-up">
        <h2><center>Distribution Center Facilities</center></h2>

        <div className="table-responsive">
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
              <tr>
                <td>1</td>
                <td>Docking Area</td>
                <td>Multiple docks, conveyors, fast loading</td>
                <td>Quick inbound & outbound movement</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Sorting Zone</td>
                <td>Automated sorting, labeling system</td>
                <td>Sort goods for regional dispatch</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Cross-Docking Zone</td>
                <td>No storage needed, immediate transfer</td>
                <td>Fast transfer from inbound to outbound</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Dispatch Area</td>
                <td>Route planning, load management</td>
                <td>Prepare shipments for delivery</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Tracking & Control Room</td>
                <td>Real-time monitoring, GPS, CCTV</td>
                <td>Monitor vehicles & shipments</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </motion.div>
  );
};

export default DistributionPages;
