import React from "react";
import { motion } from "framer-motion";

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

const BlogPage = () => {
  const blogs = [
    { title: "How Supply Chain is Evolving in 2025", img: B1, desc: "Explore how automation, AI, and digitization are reshaping global supply chain operations." },
    { title: "Why Last-Mile Delivery Matters", img: B2, desc: "Last-mile delivery is the most crucial step in logistics — here’s why companies must optimize it." },
    { title: "Warehouse Automation Trends", img: B3, desc: "Robots, smart sensors, and autonomous systems are transforming warehouses." },
    { title: "How to Reduce Logistics Costs", img: B4, desc: "Top strategies to reduce transportation, storage, and handling expenses effectively." },
    { title: "Benefits of 3PL for Growing Businesses", img: B5, desc: "Why small businesses prefer outsourcing logistics to expert 3PL partners." },
    { title: "Cold Chain Logistics Explained", img: B6, desc: "Temperature-controlled supply chains ensure safety for perishables & medicines." },
    { title: "E-commerce Logistics Challenges", img: B7, desc: "Rising demand, returns, and fast delivery expectations challenge logistics networks." },
    { title: "Inventory Optimization Tips", img: B8, desc: "Prevent overstocking and stockouts with smart inventory planning." },
    { title: "Sustainability in Transport", img: B9, desc: "EV trucks, green packaging, and renewable fuels are shaping logistics." },
    { title: "AI for Demand Forecasting", img: B10, desc: "AI forecasting helps reduce costs and improve product availability." },
    { title: "Why Real-Time Tracking Matters", img: B11, desc: "Live tracking improves transparency, customer satisfaction, and security." },
    { title: "Future of Global Freight", img: B12, desc: "Geopolitics, trade routes, and digital tech are reshaping global freight." }
  ];

  return (
    <>
      <style>{`
        .blog-wrapper {
          max-width: 1500px;
          margin: auto;
          padding: 40px 20px;
          font-family: "Poppins", sans-serif;
          color: #111;
          background: #FAEBEF;
        }

        .blog-title {
          text-align: center;
          font-size: 2.6rem;
          font-weight: 700;
          margin-bottom: 40px;
          color: #333D79;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .blog-card {
          background: #fff;
          border-radius: 14px;
          overflow: hidden;
          padding: 0 0 18px 0;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: 0.4s ease-in-out;
        }

        .blog-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 10px 25px rgba(0,0,0,0.18);
        }

        .blog-img-box {
          width: 100%;
          height: 200px;
          overflow: hidden;
          border-radius: 14px 14px 0 0;
        }

        .blog-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .blog-card:hover .blog-img {
          transform: scale(1.15);
        }

        .blog-content {
          padding: 18px;
        }

        .blog-card h3 {
          font-size: 1.3rem;
          margin-bottom: 12px;
          color: #333D79;
          text-align: center;
        }

        .blog-desc {
          font-size: 1rem;
          color: #0b0b0bff;
          line-height: 1.6;
          text-align: center;
        }

        @media (max-width: 768px) {
          .blog-title { font-size: 2rem; }
        }

        @media (max-width: 480px) {
          .blog-title { font-size: 1.8rem; }
          .blog-img-box { height: 170px; }
        }
      `}</style>

      <div className="blog-wrapper">
        <h1 className="blog-title">Our Latest Blogs</h1>

        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <motion.div
              className="blog-card"
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="blog-img-box">
                <img src={blog.img} alt={blog.title} className="blog-img" />
              </div>
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p className="blog-desc">{blog.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
