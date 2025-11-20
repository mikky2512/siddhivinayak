
import F1 from "./Images/F1.jpg";
import F2 from "./Images/F2.jpg";
import F3 from "./Images/F3.jpg";
import F4 from "./Images/F4.jpg";
import F5 from "./Images/F5.jpg";
import F6 from "./Images/F6.jpg";
import F7 from "./Images/F7.jpg";
import F8 from "./Images/F8.jpg";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../Styles/Fulfillment.css";



const cardMotion = {
  container: {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.06 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.26, ease: "easeOut" } },
  },
};

const tableVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { when: "beforeChildren", staggerChildren: 0.06 } },
};

const rowVariants = {
  hidden: { opacity: 0, x: -12, scale: 0.995 },
  show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.22, ease: "easeOut" } },
};

export default function Fulfillment() {
  const [selectedId, setSelectedId] = useState(null);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    // scroll to top on mount
    window.scrollTo(0, 0);

    // escape key to close modal
    const onKey = (e) => {
      if (e.key === "Escape") setSelectedId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const cards = [
    {
      id: 1,
      title: "Receiving & Inspection Facility",
      img: F1,
      desc: `⚙️ Facilities Provided:
• Dedicated unloading docks for trucks & containers
• Weighing stations for product verification
• Barcode & RFID scanning systems
• Quality inspection area
• Documentation counters for invoices & receipts

🧭 Purpose:
Ensure all incoming goods are verified, checked, and recorded properly.`,
    },
    {
      id: 2,
      title: "Storage Facility",
      img: F2,
      desc: `📦 Facilities Provided:
• Pallet racking & shelving systems
• Climate-controlled temperature zones
• Hazardous material storage
• FIFO/LIFO-based storage layouts
• WMS-based inventory tracking

🧭 Purpose:
Safe & optimized storage with fast accessibility.`,
    },
    {
      id: 3,
      title: "Order Processing Facility",
      img: F3,
      desc: `🚀 Facilities Provided:
• Automated Order Management System (OMS)
• Real-time inventory sync with e-commerce systems
• Auto-generated picking lists
• Task allocation & workflow tracking

🧭 Purpose:
Faster processing & reduced human error.`,
    },
    {
      id: 4,
      title: "Picking Facility",
      img: F4,
      desc: `🧍‍♂️ Facilities Provided:
• Pick-to-light systems
• Voice-directed picking
• Barcode scanning devices
• Automated Guided Vehicles (AGVs)
• Zone-based picking

🧭 Purpose:
Increase picking speed & accuracy.`,
    },
    {
      id: 5,
      title: "Packing Facility",
      img: F5,
      desc: `📦 Facilities Provided:
• Ergonomic packing stations
• Custom packaging supplies
• Auto weighing & dimension scanning
• Label & barcode printing
• Invoice/return slip generation

🧭 Purpose:
Professional, secure, and fast packing.`,
    },
    {
      id: 6,
      title: "Shipping & Dispatch Facility",
      img: F6,
      desc: `🚚 Facilities Provided:
• Loading bays & conveyors
• Integration with major couriers (DHL, FedEx, etc.)
• Auto shipping label generation
• Tracking notifications
• GPS tracking & fleet management

🧭 Purpose:
Fast, trackable, and reliable delivery.`,
    },
    {
      id: 7,
      title: "Returns & Reverse Logistics",
      img: F7,
      desc: `🔁 Facilities Provided:
• Returns receiving dock
• QC & restocking area
• Repair/repackaging station
• Disposal management
• Return-to-vendor systems

🧭 Purpose:
Efficient handling of returns with minimal loss.`,
    },
    {
      id: 8,
      title: "Technology & Automation",
      img: F8,
      desc: `💻 Facilities Provided:
• WMS (Warehouse Management System)
• OMS (Order Management System)
• RFID/barcode tracking
• Conveyor sorting automation
• AI-based forecasting

🧭 Purpose:
Increase speed, accuracy & scalability.`,
    },
  ];

  const selectedCard = cards.find((c) => c.id === selectedId);

  return (
    <div className="fulfillment-wrapper">
      <h1 className="section-title">Fulfillment Center Facilities</h1>

      {/* Cards: overlay on hover + click for modal */}
      <motion.div
        className="cards-container"
        variants={cardMotion.container}
        initial="hidden"
        animate="show"
      >
        {cards.map((card) => (
          <motion.button
            key={card.id}
            className={`card ${selectedId === card.id ? "selected" : ""}`}
            onMouseEnter={() => setHovered(card.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setSelectedId(card.id)}
            layoutId={`card-${card.id}`}
            variants={cardMotion.item}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.995 }}
            aria-label={`Show details for ${card.title}`}
          >
            <motion.img
              src={card.img}
              alt={card.title}
              className="card-img"
              layoutId={`image-${card.id}`}
              draggable={false}
            />

            {/* Hover overlay (title + short preview) */}
            <div className={`card-overlay ${hovered === card.id ? "visible" : ""}`}>
              <h3>{card.title}</h3>
              {/* short preview from desc (first line) */}
              <p className="card-preview">
                {card.desc.split("\n")[0]?.replace(/⚙️|📦|🚀|🧍‍♂️|📦|🚚|🔁|💻/g, "").trim()}
              </p>
            </div>
          </motion.button>
        ))}
      </motion.div>

      {/* Modal: white rounded card with centered title/content */}
      <AnimatePresence initial={false}>
        {selectedCard && (
          <motion.div
            className="overlay"
            key={`overlay-${selectedCard.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12, ease: "easeOut" }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="expanded-card"
              layoutId={`card-${selectedCard.id}`}
              onClick={(e) => e.stopPropagation()}
              transition={{ layout: { duration: 0.18, ease: "easeOut" } }}
              role="dialog"
              aria-modal="true"
              aria-label={selectedCard.title}
            >
              <motion.img
                src={selectedCard.img}
                alt={selectedCard.title}
                className="expanded-img"
                layoutId={`image-${selectedCard.id}`}
                draggable={false}
                transition={{ duration: 0.16 }}
              />

              <motion.div
                className="expanded-content card-style-modal"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <h2 className="modal-title">{selectedCard.title}</h2>
                <p className="modal-desc" style={{ whiteSpace: "pre-line" }}>
                  {selectedCard.desc}
                </p>

                <div className="expanded-actions">
                  <button className="close-btn" onClick={() => setSelectedId(null)} aria-label="Close details">
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated, advanced table with staggered rows */}
      <motion.div
        className="table-wrapper"
        variants={tableVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
      >
        <h2 className="section-title">Fulfillment Process Table</h2>

        <div className="responsive-table">
          <table className="fulfillment-table" role="table" aria-label="Fulfillment process steps">
            <thead>
              <tr>
                <th>Step</th>
                <th>Process</th>
                <th>Description</th>
              </tr>
            </thead>

            <motion.tbody>
              {[
                ["1", "Receiving", "Unload, inspect and record goods."],
                ["2", "Storage", "Organized placement into racks and shelves."],
                ["3", "Order Processing", "Orders received into system and allocated."],
                ["4", "Picking", "Products picked using smart tools."],
                ["5", "Packing", "Secure professional packing."],
                ["6", "Shipping", "Courier integrated dispatch."],
                ["7", "Returns", "Reverse logistics & QC."],
              ].map((row) => (
                <motion.tr key={row[0]} variants={rowVariants}>
                  <td data-label="Step">{row[0]}</td>
                  <td data-label="Process">{row[1]}</td>
                  <td data-label="Description">{row[2]}</td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
