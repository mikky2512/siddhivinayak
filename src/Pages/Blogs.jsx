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
<h3>🌍 Resilience, Regionalization & Risk Management:</h3>
<ul>
 • As global events (pandemics, geopolitical tensions, trade disruptions) continue to impact supply routes, companies are shifting from “just-in-time” global supply chains toward more regional or near-shore sourcing, to reduce vulnerability to distant disruptions.<br>
 • Diversification of supplier base, multiple sourcing, and building redundancy are becoming strategic priorities so businesses can pivot quickly if one region becomes problematic.<br>
 • Advanced risk-management methods-often combining simulation models (digital twins), predictive analytics, and scenario planning-are used to anticipate and mitigate disruptions.<br> 
 • This shift helps supply chains stay robust in volatile global conditions.</ul>
</p>

<p>
<h3>♻️ Sustainability, Circular-Economy & Environmental Pressure:</h3>
<ul>
 • ESG (environmental, social, governance) criteria are no longer optional: companies are embedding sustainability deeply into supply-chain strategy-from sourcing raw materials to logistics, packaging, and transportation.<br>
 • Circular supply-chain models-emphasizing reuse, recycling, repair, and minimized waste-are gaining traction. For example, more businesses aim to use traceability tools and digital product passports to track product lifecycle and environmental footprint.<br>
 • Green logistics: optimizing transport routes, using cleaner fuels or electric vehicles (where possible), minimizing packaging waste, and improving energy efficiency across operations.<br>
  </ul>
</p>

<p>
<h3>⚙️ New Supply-Chain Models: On-Demand, Flexible Warehousing & Networked Ecosystems:</h3>
<ul>
 • Businesses are increasingly turning to on-demand or pay-per-use warehousing-renting warehouse/storage capacity only when needed (e.g. peak season), rather than maintaining large fixed warehouses. This improves cost efficiency and flexibility.<br>
 • Urban warehousing-locating warehouses closer to dense consumer populations-is rising, which helps reduce last-mile delivery times and costs.<br>
 • Supply chains are shifting from linear chains to platform-ed, hyper-connected ecosystems, where suppliers, manufacturers, logistics providers, and retailers are more tightly integrated via shared data, seamless communication, and real-time collaboration.<br>
  </ul>
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
<h2>🚚 Why Last-Mile Delivery Matters?</h2>
Last-mile delivery is the final step in the supply chain — the movement of goods from a transportation hub or warehouse to the customer’s doorstep. Although it is the shortest part of the journey, it is the most critical, most expensive, and most customer-visible stage.<br>
</p>
<p>
<h3>1.It Directly Impacts Customer Satisfaction & Loyalty:</h3>
<h4>Customers now expect:</h4>
• Fast delivery (1–2 days or same-day)<br>
• Real-time tracking<br>
• Flexible delivery options<br>
• Hassle-free returns<br>
A smoother last-mile process leads to repeat purchases and higher customer lifetime value.
</p>

<p>
<h3>2.It Accounts for the Highest Share of Logistics Cost</h3>

<h4>Even though last-mile is the final step, it is the most expensive:</h4>
• It involves many stops.<br>
• Traffic + urban delivery challenges.<br>
• Fuel + labor costs.<br>
• Failed deliveries.<br>
For most businesses, last-mile accounts for 40%–55% of total supply-chain cost.<br>
Improving this saves HUGE money.<br>
</p>

<p>
<h3>3.It Determines Delivery Speed<h3>
<h4>Fast delivery is a competitive advantage for:</h4>
• E-commerce<br>
• Grocery<br>
• Pharma<br>
• Food delivery<br>
• B2B spare parts<br>
The faster the last-mile network, the more competitive the business.
</p>

<p>
<h3>4.It Impacts Operational Efficiency</h3>
<h4>Efficient last-mile systems can:</h4>
• Reduce fuel consumption<br>
• Reduce delivery failures<br>
• Optimize routes automatically<br>
• Lower manpower needs<br>
• Improve cash-on-delivery handling<br>
This leads to a more efficient, scalable logistics system.
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
<h2>🏭 Importance of Warehouse Automation</h2>
Warehouse automation refers to the use of technology, robotics, software, and automated systems to perform warehouse operations with minimal human intervention. As supply chains become faster and more complex, automation has become a critical pillar for efficiency, accuracy, and business growth.<br>
</p>
<p>
<h3>1. Increases Efficiency & Speed</h3>
<h4>Automation reduces manual, repetitive tasks such as:</h4>
• Picking<br>
• Sorting<br>
• Packing<br>
• Inventory movement<br>

This allows warehouses to process orders faster, handle more volume, and improve order turnaround time.
Faster operations = happier customers + more business growth.
</p>

<p>
<h3>2. Reduces Human Error</H3>
<h4>Manual processes increase the chances of:</h4>
• Wrong product picking<br>
• Misplaced inventory<br>
• Data-entry mistakes<br>

Automated systems use AI, scanners, and sensors to operate with near-perfect accuracy, reducing costly errors and returns.
</p>

<p>
<h3>3. Improves Space Utilization</h3>
<h4>Automated Storage & Retrieval Systems (AS/RS) and vertical automation help:</h4>
• Store more items in less space<br>
• Organize products efficiently<br>
• Maximize the warehouse footprint<br>

This is especially important in high-rent cities.
</p>

<p>
<h3>4. Enables Real-Time Visibility & Better Decision Makin</h3>
<h4>With automation, warehouses gain:</h4>
• Real-time inventory tracking<br>
• Automated reporting<br>
• Predictive analytics<br>
• Demand forecasting<br>

This leads to smarter decisions, better planning, and reduced stockouts or overstocking.
</p>

<p>
<h3>5. Supports Scalability</h3>

During peak seasons (Diwali, Christmas, festivals), manual processes often fail.<br>
Automation allows warehouses to scale quickly — processing high volumes without needing huge manpower increases.<br>
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
<h3>The Benefits of Real-Time Tracking in Modern Supply Chains</h3>

In today’s fast-moving business environment, customer expectations have changed dramatically. People want faster deliveries, instant updates, and complete transparency in how their orders move from one point to another. As a result, businesses can no longer rely on traditional, static tracking systems. Instead, they are increasingly adopting real-time tracking-a technology that provides live, accurate, and continuous visibility across the supply chain.<br>
Real-time tracking uses GPS, IoT sensors, cloud platforms, and data analytics to monitor vehicles, shipments, and inventory every second. This shift has quickly become a competitive necessity, transforming how companies manage logistics and interact with customers. Below are the major benefits driving the adoption of real-time tracking across industries.<br>
</p>

<p>
<h3>1. End-to-End Visibility Across the Supply Chain</h3>

One of the biggest advantages of real-time tracking is the complete visibility it offers. Companies can monitor shipments as they move through various touchpoints — from the warehouse, to transit, to last-mile delivery. This transparency eliminates operational blind spots that often lead to errors, delays, and miscommunication.<br>

With live GPS data, logistics teams know the exact location of a vehicle or shipment at any moment. This helps businesses make faster decisions, anticipate disruptions, and maintain tighter control over operations. In a world where supply chains are complex and global, visibility is not just a benefit — it is a necessity.
</p>

<p>
<h3>2. Improved Delivery Accuracy and Reliability</h3>

Delivery accuracy plays a major role in customer satisfaction. Real-time tracking ensures that companies have precise information about delivery timelines. When arrival times are accurate, customers receive realistic expectations, and businesses can avoid missed deliveries or repeated attempts.<br>

If a vehicle gets stuck in traffic, breaks down, or faces unexpected delays, the system immediately updates the estimated time of arrival (ETA). Companies can then adjust schedules, reroute vehicles, or notify customers instantly. This level of reliability helps reduce operational chaos and strengthens brand trust.
</p>

<p>
<h3>3. Faster Problem Detection and Resolution</h3>
Logistics challenges are inevitable-from traffic delays to route deviations, weather issues, or miscommunication. With manual processes, these problems may go unnoticed until it’s too late. Real-time tracking changes this by providing instant alerts for exceptions.<br>

<h4>When something goes wrong, the system notifies managers, enabling quick corrective action:</h4>

• Dispatching backup vehicles<br>
• Rerouting drivers<br>
• Informing customers proactively<br>
• Coordinating with warehouse teams<br>

This proactive approach minimizes disruptions, reduces losses, and ensures smoother delivery operations.
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
<h2>📦 Why Inventory Management Matters?</h2>

Inventory management is one of the most critical components of any successful business — whether it’s retail, e-commerce, manufacturing, distribution, or wholesale. It ensures that the right products are available at the right time, in the right quantity, and at the right cost. Effective inventory management keeps operations smooth, customers satisfied, and finances healthy.<br>

<h4>Below are the key reasons why inventory management matters:</h4>
</p>

<p>
<h3>⭐ 1. Prevents Stockouts and Lost Sales</h3>

When a customer wants to buy something and it’s not available, the sale is lost instantly — and often the customer too.
<h4>Proper inventory management helps:</h4>
<ul>
• Maintain adequate stock levels<br>
• Forecast demand accurately<br>
• Ensure best-selling items are always available<br></ul>
This directly impacts revenue and customer trust.
</p>

<p>
<h3>⭐ 2. Enhances Order Accuracy and Customer Satisfaction</h3>
<h4>Accurate inventory data ensures:</h4>
<ul>
• Faster order processing<br>
• Fewer out-of-stock cancellations<br>
• On-time fulfillment<br>
• Fewer returns and mistakes<br></ul>
This leads to happier customers and a better brand reputation.
</p>

<p>
<h3>⭐ 3. Supports Better Demand Forecasting</h3>

<h4>Good inventory management provides valuable data on:</h4><ul>
• Sales patterns<br>
• Seasonality<br>
• Customer preferences<br>
• Fast-moving vs. slow-moving items<br></ul>
This helps businesses forecast future demand and plan smarter, reducing risk and improving profitability.
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
<h2>🚚 The Future of Transportation in Logistics</h2>

Transportation is the backbone of the global supply chain. As technology evolves and customer expectations rise, logistics transportation is undergoing a major transformation. From automation to electrification to data-driven planning, the future of logistics transportation will be faster, smarter, greener, and more efficient than ever before.<br>
<h4>Here’s a look at the key trends shaping the future:</h4>
</p>

<p>
<h3>1. Electric Vehicles (EVs) Will Dominate Freight Movement</h3>
Sustainability is now a top priority. Governments and companies worldwide are pushing for cleaner transportation.<br>

<h4>Why EVs matter:</h4>
<ul>
• Reduced fuel costs<br>
• Lower carbon emissions<br>
• Less maintenance than diesel trucks<br>
• Government incentives and EV-friendly regulations<br></ul>

In the next decade, EV trucks and vans will become the standard for last-mile and mid-mile logistics, especially in urban areas.
</p>

<p>
<h3>2. Autonomous Vehicles & Self-Driving Trucks</h3>
Autonomous transportation is set to revolutionize long-distance logistics.<br>

<h4>Benefits include:</h4>
<ul>
• 24/7 continuous driving<br>
• Reduced driver shortages<br>
• Lower accident rates<br>
• Improved route efficiency<br></ul>

While fully autonomous fleets may take time, semi-autonomous trucks with advanced driver assistance systems (ADAS) are already becoming common.
</p>
<h3>3. Multi-Modal Transportation Integration</h3>
<h4>The future will bring seamless coordination between:</h4><ul>
• Road<br>
• Rail<br>
• Air<br>
• Sea<br>
• Hyperloop<br>
• Drones<br></ul>
AI platforms will automatically choose the fastest, cheapest, and most sustainable combination, making logistics smarter and more cost-effective.
<p>
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
<h2>Challenges in E-Commerce Logistics: What Every Business Must Overcome in 2025</h2>
E-commerce has become the backbone of modern retail, with millions of customers expecting fast delivery, smooth order tracking, and easy returns — all from the comfort of their homes. But behind every “Buy Now” button lies a complex logistics network working round the clock. As online shopping continues to grow in 2025, so do the challenges associated with managing e-commerce logistics. Businesses that fail to tackle these obstacles risk delayed deliveries, higher operational costs, and unhappy customers.<br>
In this blog, we’ll explore the major challenges in e-commerce logistics and why solving them is essential for long-term success.
</p>

<p>
<h3>1. Rising Customer Expectations</h3>
Today’s customers expect next-day delivery, real-time tracking, zero delivery charges, and hassle-free returns. The mindset has shifted from “fast delivery is a bonus” to “fast delivery is the norm.”<br>
<h4>However, meeting these expectations requires:</h4><ul>
• Highly optimized delivery routes<br>
• Larger networks of fulfillment centers<br>
• Well-trained courier partners<br>
• Seamless tech integration<br></ul>
For small and mid-sized businesses, competing with giants like Amazon becomes difficult, especially when customers expect premium services at low or no additional cost.
</p>

<p>
<h3>2. Technological Integration Problems<h3>
<h4>While e-commerce relies heavily on technology, not all businesses are equipped with:</h4><ul>
• Real-time inventory sync<br>
• Multi-carrier shipping platforms<br>
• API integrations<br>
• Automated warehouse systems<br>
• Accurate tracking solutions<br></ul>
Integration issues lead to delays, incorrect inventory levels, and inefficient order processing.<br>
Technology should simplify logistics — but without proper implementation, it can create more confusion than clarity.<br>
</p>

<p>
<h3>3. Handling Returns (Reverse Logistics)</h3>
E-commerce return rates are 3–4 times higher than offline retail. Clothing, electronics, and cosmetics see even higher return percentages.<br>
<h4>Returns create challenges such as:</h4><ul>
• Additional transportation costs<br>
• Checking product condition<br>
• Restocking and repackaging<br>
• Potential product losses<br>
• Slower cash flow<br></ul>
Reverse logistics requires separate teams, dedicated processes, and advanced tracking systems — all of which require investment and planning.
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
<h2>Inventory Optimization Strategies: How Smart Brands Stay Efficient in 2025</h2>
In today’s fast-moving business environment, inventory management is more than just storing products — it is about striking the right balance between demand and supply. Whether you run an e-commerce store, a retail chain, or a distribution center, inventory optimization determines your profitability, operational efficiency, and customer satisfaction.<br>
In 2025, with customers expecting faster deliveries and supply chains becoming more unpredictable, businesses can no longer rely on guesswork or outdated methods. They need smart, data-driven strategies to ensure the right products are available at the right time — without overstocking or running out.<br>
<h4>Below are the most effective inventory optimization strategies that help modern businesses stay competitive:</h4>
</p>

<p>
<h3>1. Implementing Just-in-Time (JIT) Inventory</h3>
Just-in-Time inventory is a lean method where stock is replenished only when needed, minimizing holding costs.<br>
<h4>Benefits include:</h4><ul>
• Lower warehousing expenses<br>
• Reduced risk of dead stock<br>
• Improved cash flow<br></ul>
However, JIT requires reliable suppliers, fast logistics, and strong demand forecasting. When executed correctly, it can dramatically boost efficiency.
</p>

<p>
<h3>2. Multi-Channel Inventory Synchronization</h3>
With customers shopping across multiple platforms — websites, apps, marketplaces, social media — inventory must sync instantly everywhere.<br>
<h4>Without synchronization, businesses risk:</h4><ul>
• Overselling<br>
• Stockouts<br>
• Duplicate orders<br>
• Slow fulfillment<br></ul>
Centralized inventory software ensures seamless integration across channels, reducing confusion and improving operational flow.
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
<h2>Sustainability in Modern Transportation</h2>
In the last decade, sustainability has become more than just a trend — it has become a core necessity for industries around the world. Transportation, being one of the largest contributors to carbon emissions, plays a crucial role in shaping a greener future. Whether it’s logistics, public transit, aviation, or personal mobility, modern transportation is undergoing a massive transformation driven by environmental responsibility, technological innovation, and changing consumer expectations.<br>
As companies, governments, and consumers push toward eco-friendly practices, the transportation sector is embracing new models that aim to minimize pollution, reduce waste, and optimize resources. This blog explores how sustainability is shaping modern transportation and why it is essential for the future.<br>
</p>

<p>
<h3>1. The Shift Toward Green Transportation</h3>
<h4>Modern transportation systems are moving away from fossil-fuel dependency toward cleaner alternatives. This shift is driven by factors such as:</h4><ul>
• Rising pollution levels<br>
• Government regulations<br>
• Corporate sustainability goals<br>
• Increased awareness among consumers<br></ul>
Electric vehicles (EVs), hybrid systems, and alternative fuels like biofuel and hydrogen are becoming more common. These innovations not only reduce carbon footprints but also lower long-term operating costs for businesses.
</p>

<p>
<h3>2. The Rise of Electric and Hybrid Vehicles</h3>
<h4>One of the biggest breakthroughs in sustainable transportation is the widespread adoption of electric vehicles. EVs offer several advantages:</h4><ul>
• Zero tailpipe emissions<br>
• Lower maintenance costs<br>
• High energy efficiency<br>
• Reduced dependence on fossil fuels<br></ul>

In the logistics world, companies are increasingly using electric vans, two-wheelers, and even electric trucks for last-mile and mid-mile delivery. This shift helps reduce emissions significantly, especially in dense urban areas.

Hybrid vehicles, which combine electric and fuel engines, are also popular for long-distance routes where charging infrastructure is still developing.
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
<h2>How AI Improves Demand Forecasting: Transforming Supply Chains in 2025</h2>
In today’s highly competitive business landscape, companies can no longer rely on guesswork or basic historical data to plan their inventory and supply chain operations. Demand patterns are becoming increasingly unpredictable due to market fluctuations, seasonal shifts, global disruptions, and evolving customer behaviors. This is where Artificial Intelligence (AI) is revolutionizing the way brands forecast demand.<br>
AI-powered forecasting brings accuracy, speed, and data-driven insights that traditional forecasting methods simply cannot match. By analyzing massive datasets and identifying patterns that humans may overlook, AI helps businesses stay one step ahead of demand — reducing costs, preventing stockouts, and improving customer satisfaction.<br>
<h4>In this blog, we’ll explore how AI improves demand forecasting and why it is becoming essential for modern supply chain strategies:</h4>
</p>

<p>
<h3>1. AI Analyzes Complex & Large-Scale Data</h3>
Traditional forecasting methods depend heavily on past sales data and a few manually selected variables. But modern supply chains require deeper insights than just historical trends.<br>
<h4>AI can analyze vast amounts of data from multiple sources, such as:</h4><ul>
• Customer purchase history<br>
• Market trends<br>
• Seasonal patterns<br>
• Social media sentiment<br>
• Competitor activities<br>
• Economic indicators<br></ul>
By incorporating these diverse datasets, AI creates more accurate predictions, especially in volatile markets.
</p>

<p>
<h3>2. Real-Time Forecasting for Faster Decision-Making</h3>
One of AI’s biggest strengths is its ability to process data in real time. Instead of waiting for monthly or quarterly reviews, businesses can access live demand forecasts that adapt instantly to new information.<br>
<h4>Real-time forecasting allows companies to:</h4><ul>
• Respond to sudden demand spikes<br>
• Adjust inventory levels quickly<br>
• Avoid stockouts and overstocking<br>
• Improve order fulfillment speed<br></ul>
This dynamic approach is especially important for industries like e-commerce, fashion, and FMCG, where trends change rapidly.
</p>

<p>
<h3>3. AI Enhances Seasonal & Promotional Forecasting</h3>
Seasonal peaks — such as holidays, festivals, and special events — often cause huge variations in demand. Traditional forecasting models struggle with these fluctuations.<br>
<h4>AI, however, uses predictive algorithms to evaluate:</h4><ul>
• Past seasonal performance<br>
• External factors like weather<br>
• Marketing campaigns<br>
• Upcoming promotions<br>
• Regional variations<br></ul>
This helps businesses plan for seasonal demand with better accuracy and avoid last-minute supply chain chaos.
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
<h2>Why Visibility Matters in Supply Chains: The Key to Smarter, Faster, and More Resilient Operations</h2>
In today’s fast-paced business environment, supply chains have become more complex than ever. Companies source raw materials from multiple countries, rely on global manufacturers, and deliver products across thousands of miles. With so many moving parts, even small disruptions can lead to delayed shipments, rising costs, or unhappy customers.<br>
This is where supply chain visibility becomes essential. Visibility is the ability to track goods, data, and processes in real time — from suppliers to warehouses to final delivery. It gives businesses the transparency they need to make smarter decisions, reduce uncertainty, and build trust with their customers.<br>
<h4>As companies navigate unpredictable markets in 2025, supply chain visibility is no longer optional-it is a strategic necessity.</h4>
</p>

<p>
<h3>1. Visibility Enables Better Decision-Making</h3>
<h4>A supply chain involves hundreds of daily decisions:</h4> 
When to reorder inventory? Which routes are fastest? Which suppliers are reliable? Without accurate data, these decisions become guesswork.<br><ul>
•Real-time inventory levels<br>
•Order status updates<br>
•Shipment tracking<br>
•Supplier performance data<br>
•Demand fluctuations<br></ul>
With complete information at their fingertips, businesses can make faster, more informed decisions. This reduces risks and helps teams respond quickly to changes in demand or disruptions in supply.
</p>

<p>
<h3>2. Reduces Delays and Improves Delivery Performance</h3>
<h4>Late deliveries are one of the biggest pain points in logistics. Poor visibility often leads to:</h4><ul>
• Miscommunication<br>
• Lost shipments<br>
• Unexpected delays<br>
• Manual errors<br></ul>
Real-time visibility allows companies to track exactly where a shipment is, anticipate delays, and take corrective action immediately.<br>
<h4>If a shipment is stuck due to weather, traffic, or customs issues, businesses can:</h4><ul>
• Reroute shipments<br>
• Inform customers proactively<br>
• Adjust warehouse planning<br></ul>
This results in faster delivery, fewer surprises, and improved customer trust.
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
<h2>Future of Global Freight Movement: What the Next Decade Will Look Like</h2>
The world of global freight is undergoing a massive transformation. As international trade expands and customer expectations rise, the demand for faster, smarter, and more sustainable freight movement is at an all-time high. From automation and AI to green logistics and digital platforms, the future of global freight will be defined by innovation and efficiency.<br>
As we move further into the decade, it’s clear that the traditional ways of transporting goods will no longer be enough. Businesses need flexible, resilient, and technologically advanced logistics networks to stay competitive in a rapidly evolving global economy.<br>
<h4>Here’s what the future of global freight movement looks like — and why these changes matter.</h4>
</p>

<p>
<h3>1. The Rise of Autonomous Freight Transportation</h3>
Self-driving technology is set to disrupt global freight movement across air, road, and sea.<br>
<h4>Autonomous trucks</h4>
Semi-autonomous and fully autonomous trucks will reduce driver shortages, increase road safety, and enable 24/7 long-distance movement without fatigue.<br>

<h4>Autonomous ships and drones</h4><ul>
• AI-powered cargo ships will optimize ocean routes and reduce fuel consumption.<br>
• Cargo drones will handle lighter international shipments at incredible speed.<br></ul>
Autonomous freight significantly cuts operating costs and improves delivery consistency across global routes.
</p>

<p>
<h3>2. Electrification and Green Freight Solutions</h3>
Sustainability is becoming a global priority, and freight transportation is a major focus. Governments and corporations are adopting strict carbon-reduction goals, pushing the industry toward green alternatives.<br>
<h4>What we’ll see:</h4><ul>

• Electric long-haul trucks replacing diesel fleets<br>
• Hydrogen-powered cargo ships with lower emissions<br>
• Biofuel adoption across air and sea transportation<br>
• Electrified last-mile solutions in megacities<br></ul>
Green freight not only reduces environmental impact but also decreases long-term operating costs.
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
         color: #333D79;
        border-bottom: 0.5px solid #bcbcbdff;
        margin-bottom:25px;
        }

        .full-content h2{
        color: #333D79;
        }

        .full-content h3{
        color: #333D79;
        }

        .full-content h4{
        color: #010101c5;
        font-style: bold;
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
          font-size: 1rem;
          margin-top: 25px;
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
