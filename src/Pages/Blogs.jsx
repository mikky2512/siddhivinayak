// Import your images
import B1 from "./Images/B1.jpg";
import B2 from "./Images/B2.jpg";
import B3 from "./Images/B3.jpg";
import B4 from "./Images/B4.jpg";
import B5 from "./Images/B5.jpg";
import B6 from "./Images/B6.jpg";
import B7 from "./Images/B7.jpg";
import B8 from "./Images/B8.jpg";
import B9 from "./Images/B9.jpg";
import B10 from "./Images/B10.jpg";
import B11 from "./Images/B11.jpg";
import B12 from "./Images/B12.jpg";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const BlogPage = () => {
  const [selected, setSelected] = useState(null);

  const blogs = [
    { id: 1, title: "How Supply Chain is Evolving in 2025", img: B1, content: "Full blog content goes here..." },
    { id: 2, title: "Why Last-Mile Delivery Matters", img: B2, content: "Full blog content goes here..." },
    { id: 3, title: "Warehouse Automation Trends", img: B3, content: "Full blog content goes here..." },
    { id: 4, title: "How to Reduce Logistics Costs", img: B4, content: "Full blog content goes here..." },
    { id: 5, title: "Benefits of 3PL for Business", img: B5, content: "Full blog content goes here..." },
    { id: 6, title: "Cold Chain Logistics", img: B6, content: "Full blog content goes here..." },
    { id: 7, title: "E-commerce Logistics Challenges", img: B7, content: "Full blog content goes here..." },
    { id: 8, title: "Inventory Optimization Tips", img: B8, content: "Full blog content goes here..." },
    { id: 9, title: "Sustainability in Transport", img: B9, content: "Full blog content goes here..." },
    { id: 10, title: "AI for Forecasting", img: B10, content: "Full blog content goes here..." },
    { id: 11, title: "Real-Time Tracking Benefits", img: B11, content: "Full blog content goes here..." },
    { id: 12, title: "Future of Global Freight", img: B12, content: "Full blog content goes here..." }
  ];

  const blog = blogs.find((b) => b.id === selected);

  return (
    <>
      <style>{`
        .blog-wrapper {
          max-width: 2000px;
          margin: auto;
          padding: 40px 20px;
          font-family: Poppins, sans-serif;
          background-color: #FAEBEF;  
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
          gap: 30px;
        }

        .blog-card {
          background: #fff;
          border-radius: 14px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .blog-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
        }

        .full-page {
          position: fixed;
          top: 0; left: 0;
          width: 100%;
          height: 100%;
          overflow-y: auto;
          background: #fff;
          z-index: 3000;
        }

        .full-img {
          width: 100%;
          height: 350px;
          object-fit: cover;
        }

        .full-content {
          padding: 25px;
        }

        .close-btn {
          padding: 10px 18px;
          background: #333D79;
          color: #fff;
          border-radius: 8px;
          margin-top: 20px;
          border: none;
          cursor: pointer;
        }
      `}</style>

      {/* -------- BLOG GRID -------- */}
      {selected === null && (
        <div className="blog-wrapper">
          <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Our Blogs</h1>

          <div className="blog-grid">
            {blogs.map((b) => (
              <motion.div
                key={b.id}
                className="blog-card"
                layoutId={`card-${b.id}`}
                onClick={() => setSelected(b.id)}
              >
                <motion.img src={b.img} className="blog-img" layoutId={`img-${b.id}`} />
                <div style={{ padding: "18px" }}>
                  <h3>{b.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* -------- FULL PAGE EXPANDED BLOG -------- */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="full-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div layoutId={`card-${blog.id}`}>
              <motion.img
                src={blog.img}
                className="full-img"
                layoutId={`img-${blog.id}`}
              />
            </motion.div>

            <div className="full-content">
              <h1>{blog.title}</h1>
              <p style={{ marginTop: "15px", fontSize: "1.1rem", lineHeight: "1.7" }}>
                {blog.content}
              </p>

              <button className="close-btn" onClick={() => setSelected(null)}>
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BlogPage;
