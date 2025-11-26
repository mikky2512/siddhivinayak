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

  // -------------------- BLOG DATA --------------------
  const blogs = [
    {
      id: 1,
      title: "How Supply Chain is Evolving in 2025",
      img: B1,
      content: `
<center><img src="${B1}" class="inside-img" /></center>

<p>
The supply chain industry in 2025 is transforming faster than ever before due to automation,
AI-driven analytics, and real-time data visibility. Companies now depend on smarter forecasting tools
that reduce excess inventory, avoid shortages, and provide faster planning solutions. Businesses are
increasingly prioritizing speed, accuracy, and resilience in their operations to stay competitive in a
world where demand patterns are constantly shifting.
</p>

<p>
Warehouses are becoming highly automated with intelligent robotics, IoT sensors, and digital twin
technology that simulate operations before implementation. These solutions significantly reduce human
errors, optimize routes inside the warehouse, and lower labor costs. With cloud-based systems,
companies can track product movement, monitor storage conditions, and manage order flows with higher
accuracy and reliability. Automation allows even large-scale operations to run smoothly during peak
demand seasons.
</p>

<p>
Sustainability is another major focus of modern supply chains, powered by electric vehicles,
eco-friendly packaging, and optimized delivery routes that reduce fuel consumption. More companies are
adopting renewable energy and green logistics practices to meet global environmental standards. The
future supply chain ecosystem is expected to be more transparent, digitally connected, and resilient
against disruptions caused by geopolitical challenges and fluctuating global trends.
</p>
`
    },

    // BLOG 2
    {
      id: 2,
      title: "Why Last-Mile Delivery Matters",
      img: B2,
      content: `
<center><img src="${B2}" class="inside-img" /></center>

<p>
Last-mile delivery is the most crucial phase of logistics because it directly affects customer
experience and satisfaction. As online shopping continues to grow, businesses are under increased
pressure to deliver products quickly and reliably. Last-mile delivery determines whether a brand can
meet its promise and build trust with its customers. Speed, accuracy, and convenience have now become
key differentiators in this highly competitive digital marketplace.
</p>

<p>
Companies are adopting advanced tracking systems, automated dispatch technologies, and route
optimization tools to streamline the delivery process. Real-time tracking offers customers visibility
over their orders, reducing uncertainty and missed deliveries. With increased focus on sustainability,
electric bikes, smart lockers, and drone delivery are becoming more common solutions in urban areas to
reduce traffic and emissions.
</p>

<p>
As consumer expectations continue to rise, efficient last-mile delivery has become essential for
business success. It not only improves customer loyalty but also reduces operational costs by enhancing
delivery accuracy. Businesses that invest in smart technology and scalable delivery models will stay
ahead in the evolving e-commerce landscape.
</p>
`
    },

    // BLOG 3
    {
      id: 3,
      title: "Importance of Warehouse Automation",
      img: B3,
      content: `
<center><img src="${B3}" class="inside-img" /></center>

<p>
Warehouse automation is becoming one of the most essential components of modern logistics, helping
companies increase accuracy, reduce labor costs, and speed up order fulfillment. Automated picking
systems, conveyor belts, and smart storage technologies eliminate human errors and improve overall
operational performance. Businesses use automation to manage rising order volumes without compromising
speed or reliability.
</p>

<p>
Robotic systems and IoT devices enable real-time inventory tracking and reduce dependency on manual
labor. These tools allow organizations to know exactly where products are stored, how quickly they
move, and when they need replenishment. With automated sorting and packing, warehouses can reduce
processing time dramatically while maintaining high accuracy.
</p>

<p>
Automation also creates safer work environments by reducing physical strain and repetitive manual
tasks. As business needs grow, automated solutions allow operations to scale smoothly without major
increases in workforce size. With AI-driven optimization and predictive maintenance, warehouse
automation has become a foundation for future-ready logistics.
</p>
`
    },

    // BLOG 4
    {
      id: 4,
      title: "Benefits of Real-Time Tracking",
      img: B4,
      content: `
<center><img src="${B4}" class="inside-img" /></center>

<p>
Real-time tracking has reshaped logistics by providing continuous visibility into product movement,
reducing delays, and improving communication across supply chain networks. Businesses rely on tracking
tools to update customers instantly and ensure transparency throughout the delivery journey. With
accurate data and live monitoring, companies can respond quickly to unexpected changes and prevent
delivery disruptions.
</p>

<p>
Real-time tracking improves route planning and allows logistic teams to minimize fuel costs, avoid
traffic, and manage delivery schedules accurately. Sensors and GPS technologies provide detailed
information about shipment conditions, including temperature and handling. This is especially valuable
for sensitive goods such as pharmaceuticals and perishables.
</p>

<p>
As businesses expand globally, tracking solutions help maintain operational efficiency and ensure
customer satisfaction. By offering delivery updates and transparent communication, companies can build
stronger relationships with customers. Real-time tracking will continue to be a crucial asset for
modern supply chains.
</p>
`
    },

    // BLOG 5
    {
      id: 5,
      title: "Why Inventory Management Matters",
      img: B5,
      content: `
<center><img src="${B5}" class="inside-img" /></center>

<p>
Inventory management helps businesses maintain the right stock levels, avoiding both overstocking and
stockouts. Overstocking leads to wasted storage space and increased holding costs, while running out of
products results in lost sales and unhappy customers. With rising competition and unpredictable demand,
effective inventory systems are more important than ever.
</p>

<p>
Businesses now use automated tools to track stock in real time, forecast demand, and monitor product
performance. These systems allow better planning for seasonal spikes and large promotional campaigns.
With real-time analytics, companies can identify slow-moving items early and prevent losses from dead
inventory.
</p>

<p>
Strong inventory management improves cash flow, ensuring that companies invest only in necessary stock.
It also enhances overall operational efficiency, allowing businesses to scale without interruptions.
With accurate inventory systems, organizations can reduce errors, improve order accuracy, and deliver a
better customer experience.
</p>
`
    },

    // BLOG 6
    {
      id: 6,
      title: "Future of Transportation in Logistics",
      img: B6,
      content: `
<center><img src="${B6}" class="inside-img" /></center>

<p>
Transportation plays a critical role in logistics as businesses focus on faster, cleaner, and more
efficient movement of goods. Route optimization software helps companies reduce fuel consumption and
avoid traffic delays, improving delivery timing significantly. With rising customer expectations,
organizations are embracing technology-driven transportation systems to maintain consistent delivery
performance.
</p>

<p>
Electric vehicles, autonomous trucks, and drone deliveries are transforming the logistics sector by
providing more sustainable and cost-effective options. These innovations reduce carbon emissions,
support environmental goals, and improve access to remote locations. AI-powered route planning also
helps identify potential delays and suggests better delivery paths.
</p>

<p>
As industries adopt digital transformation, transportation networks will become more connected and
intelligent. Real-time communication between vehicles, warehouses, and distribution centers will
enhance efficiency. Future transportation systems will rely heavily on automation, sustainability, and
data-driven decision-making.
</p>
`
    },

    // BLOG 7
    {
      id: 7,
      title: "Challenges in E-commerce Logistics",
      img: B7,
      content: `
<center><img src="${B7}" class="inside-img" /></center>

<p>
E-commerce logistics is growing rapidly, driven by rising online demand and shifting customer habits.
However, meeting these expectations comes with unique logistical challenges. Businesses must handle
high order volumes, same-day delivery demands, and returns management while keeping costs under
control. These challenges require smart planning and efficient supply chain processes.
</p>

<p>
Warehouses must operate at high speed to manage fast-moving e-commerce inventories. Companies rely on
automation, smart sorting systems, and real-time tracking to keep operations efficient. Seasonal peaks,
such as festive sales or special promotions, require scalable systems that can adapt quickly without
causing delays or stockouts.
</p>

<p>
To stay competitive, e-commerce companies must focus on transparency, accurate delivery timing, and a
smooth return experience. Investments in technology and optimized warehouse systems help manage growing
customer expectations. Successful e-commerce logistics ensures fast delivery, reliable service, and
efficient handling of customer requests.
</p>
`
    },

    // BLOG 8
    {
      id: 8,
      title: "Inventory Optimization Strategies",
      img: B8,
      content: `
<center><img src="${B8}" class="inside-img" /></center>

<p>
Inventory optimization focuses on maintaining the perfect balance of supply and demand while reducing
operational costs. Businesses must avoid overstocking, which ties up capital, and stock shortages,
which impact customer satisfaction. With accurate forecasting and analytics, companies can improve stock
rotation and reduce wasted resources.
</p>

<p>
Modern optimization tools analyze customer trends, sales history, and seasonal patterns. These systems
help businesses plan inventory for upcoming promotions or peak seasons. Real-time insights ensure that
stock levels remain balanced and replenishment happens at the right time. By monitoring slow-moving
items, companies can make better decisions about clearance and inventory planning.
</p>

<p>
Effective inventory optimization improves customer satisfaction by ensuring product availability. It
also supports business growth by enabling better decision-making and reducing unnecessary costs. As
markets continue to evolve, inventory optimization will remain a top priority for supply chain teams.
</p>
`
    },

    // BLOG 9
    {
      id: 9,
      title: "Sustainability in Modern Transportation",
      img: B9,
      content: `
<center><img src="${B9}" class="inside-img" /></center>

<p>
Sustainability is becoming a core priority for transportation companies as global regulations encourage
cleaner and more eco-friendly logistics operations. Companies are shifting toward electric vehicles,
hybrid fleets, and renewable energy solutions to reduce emissions. This shift helps improve efficiency
while supporting long-term environmental goals.
</p>

<p>
Businesses are also adopting route optimization, energy-efficient packaging, and carbon monitoring
tools. These solutions help reduce fuel consumption, minimize waste, and improve delivery consistency.
For long-distance operations, alternative fuels such as LNG and hydrogen are becoming important
innovations that reduce environmental impact.
</p>

<p>
By adopting sustainable practices, businesses can reduce operational costs, build stronger brand
reputation, and meet customer expectations for eco-friendly solutions. Sustainability is no longer an
option but a competitive necessity in the logistics industry.
</p>
`
    },

    // BLOG 10
    {
      id: 10,
      title: "How AI Improves Demand Forecasting",
      img: B10,
      content: `
<center><img src="${B10}" class="inside-img" /></center>

<p>
AI-based demand forecasting helps businesses predict future sales with greater accuracy by analyzing
historical data, customer behavior, and market trends. Traditional forecasting methods often struggle
to account for sudden demand fluctuations, but AI-driven models can identify hidden patterns and
provide reliable insights. This helps businesses avoid stockouts and reduce excess inventory.
</p>

<p>
AI algorithms process large datasets quickly, allowing supply chain teams to make real-time decisions.
These systems also adapt to seasonal changes, regional demands, and economic conditions. With better
visibility into future trends, businesses can prepare inventory, optimize warehouse operations, and
reduce operational costs.
</p>

<p>
Demand forecasting powered by AI leads to improved customer satisfaction, smoother inventory planning,
and a more resilient supply chain. As markets grow more unpredictable, AI tools will become essential
for maintaining strong operational performance.
</p>
`
    },

    // BLOG 11
    {
      id: 11,
      title: "Why Visibility Matters in Supply Chains",
      img: B11,
      content: `
<center><img src="${B11}" class="inside-img" /></center>

<p>
Supply chain visibility refers to the ability to track all activities across transportation, warehousing,
and distribution. With high visibility, businesses can quickly spot delays, manage risks, and ensure
that orders move efficiently through the supply chain network. This transparency helps companies reduce
costs and improve service quality.
</p>

<p>
Real-time visibility tools allow teams to make informed decisions by giving updates on shipment
location, inventory status, and delivery progress. This reduces uncertainty and helps identify problems
before they escalate. Companies can also coordinate better with suppliers and transportation partners,
ensuring smoother operations.
</p>

<p>
With increased global trade complexity, visibility has become essential for managing risks and ensuring
on-time delivery. Companies that invest in visibility solutions are better equipped to handle market
shifts and provide consistent service to customers.
</p>
`
    },

    // BLOG 12
    {
      id: 12,
      title: "Future of Global Freight Movement",
      img: B12,
      content: `
<center><img src="${B12}" class="inside-img" /></center>

<p>
Global freight movement is changing rapidly as businesses expand into new markets and adopt more
efficient shipping technologies. With the rise of e-commerce, cross-border demand has increased
significantly, requiring better coordination between carriers, ports, and transportation systems.
Companies must now adapt to faster shipping expectations and complex international regulations.
</p>

<p>
AI, automation, and blockchain are becoming key technologies in global freight management. These tools
help track shipments across multiple countries, improve security, and reduce paperwork. Smart
containers with IoT sensors provide real-time data on temperature, humidity, and location, ensuring
sensitive goods remain protected.
</p>

<p>
As global trade continues to expand, the future of freight will rely on advanced digital systems,
sustainable transportation, and stronger international collaboration. Companies that embrace these
modern solutions will benefit from faster delivery, lower costs, and improved global connectivity.
</p>
`
    },
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
          transition: 0.3s ease;
        }

        .blog-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        .blog-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
        }

        .inside-img {
          width: 100%;
          max-width: 700px;
          display: block;
          margin: 30px auto;
          border-radius: 10px;
        }

        .full-page {
          position: fixed;
          top: 0; left: 0;
          width: 100%;
          height: 100%;
          overflow-y: auto;
          background: #FAEBEF;
          padding-bottom: 40px;
          z-index: 4000;
        }

        .full-content {
          padding: 25px;
          max-width: 850px;
          margin: auto;
          font-size: 1.15rem;
          line-height: 1.8;
          text-align: left;
        }

        .full-content h1 {
         text-align: center;
         margin-bottom: 39px;
         color: #333D79
        }

        .full-content p {
         color: #050505ff;
         margin-bottom: 22px;
         line-height: 2.10;
         font-size: 1.15rem;
        }

        .close-btn {
          padding: 15px 35px;
          background: #333D79;
          color: #fff;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          font-size: 1.3rem;
          margin-top: 20px;
          display: inline-block;
          display: block;
          margin: 20px auto 0 auto;
        }
      `}</style>

      {selected === null && (
        <div className="blog-wrapper">
          <h1 style={{ textAlign: "center",color:"#333D79",marginBottom: "40px" }}>Our Blogs</h1>

          <div className="blog-grid">
            {blogs.map((b) => (
              <motion.div
                key={b.id}
                className="blog-card"
                layoutId={`card-${b.id}`}
                onClick={() => setSelected(b.id)}
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
              >
                <motion.img src={b.img} className="blog-img" />
                <div style={{ padding: "18px" }}>
                  <h3>{b.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      <AnimatePresence>
        {selected && (
          <motion.div
            className="full-page"
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.4 }}
          >
            <div className="full-content">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {blog.title}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.45 }}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                  style={{ marginTop: "20px" }}
                />
              </motion.div>

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
