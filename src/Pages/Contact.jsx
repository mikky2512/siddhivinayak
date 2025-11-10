import React from "react";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
.contact {
  width: 100%;
  background: #fff;
}

/* Map */
.map-container iframe {
  width: 100%;
  height: 300px;
  border: 0;
}

/* Contact layout */
.contact-section {
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 60px 50px;
  flex-wrap: wrap;
}

/* Left Section */
.contact-details {
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.detail-box {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.icon {
  font-size: 30px;
}

.detail-box h4 {
  font-size: 18px;
  margin: 0;
}

.detail-box p {
  font-size: 14px;
  color: #777;
  margin-top: 5px;
}

/* Form */
.contact-form {
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  font-size: 14px;
  border-radius: 6px;
}

.contact-form textarea {
  height: 130px;
  resize: none;
}

.contact-form button {
  background: transparent;
  border: 1.5px solid #d27b6a;
  padding: 10px;
  color: #d27b6a;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
}

.contact-form button:hover {
  background: #d27b6a;
  color: white;
}
`

function Contact() {
  return (
    <div className="contact">
<GlobalStyle />
      {/* Google Map */}
      <div className="map-container">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.984161031728!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE4LjAiTiA3N8KwMzUnMzEuMCJF!5e0!3m2!1sen!2sin!4v1612345678901"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="contact-section">

        {/* Left Details */}
        <div className="contact-details">
          <div className="detail-box">
            <span className="icon">🏠</span>
            <div>
              <h4>XYZ Road, Abc Building</h4>
              <p>Vadodara,Gujarat</p>
            </div>
          </div>

          <div className="detail-box">
            <span className="icon">📞</span>
            <div>
              <h4>+1 0123456789</h4>
              <p>Mon - Sat | 10 AM to 6 PM</p>
            </div>
          </div>

          <div className="detail-box">
            <span className="icon">✉️</span>
            <div>
              <h4>info@yourmail.com</h4>
              <p>Email us your query</p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <form className="contact-form">
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter email address" />
          <input type="text" placeholder="Enter your subject" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>

      </div>
    </div>
  );
}

export default Contact;