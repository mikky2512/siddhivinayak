import React from "react";
import { useForm } from "react-hook-form";
import { createGlobalStyle } from "styled-components";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
const GlobalStyle = createGlobalStyle`
.contact-page {
  color: #333;
  font-family: "Poppins", sans-serif;
  padding: 40px 20px;
  background-color: #FAEBEF;
}

/* GRID: Left Form | Right Details */
.contact-wrapper {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 40px;
  max-width: 1300px;
  margin: auto;
}

/* LEFT: FORM */
.left-form {
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.08);
}

.left-form h2 {
  text-align: center;
  margin-bottom: 25px;
  color: #333d79;
  }

.left-form form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.left-form input,
.left-form textarea {
  width: 95%;
  padding: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.left-form button {
  background: #333D79;
  color: white;
  padding: 14px;
  border: none;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
}

.left-form button:hover {
  background: #333D79;
}

/* RIGHT: DETAILS */
.right-details {
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.08);
  height: fit-content;
}

.right-details h3 {
  margin-bottom: 15px;
  font-size: 22px;
  color: #333d79;
  
}

.right-details p {
  margin-bottom: 10px;
  font-size: 15px;
  color: #555;
}
  /* SOCIAL ICONS */
.footer-socials {
  display: flex;
  gap: 15px;
}

.footer-socials a {
  color: white;
  font-size: 17px;
  background: #333D79;
  padding: 10px;
  border-radius: 50%; 
  display: flex;
  transition: 0.3s;
}

.footer-socials a:hover {
  background: #0a8bb8;
  transform: translateY(-5px);
}

/* SMALL MAP */
.small-map {
  margin-top: 20px;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
}

.small-map iframe {
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 10px;
}

/* FEEDBACK SECTION */
.feedback-section {
  margin: 60px auto;
  max-width: 700px;
}

.feedback-section h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333d79
}

.feedback-card {
  background: #fff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.08);
}

.feedback-card textarea {
  width: 95%;
  height: 120px;
  padding: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.feedback-card button {
  margin-top: 15px;
  background: #3949ab;
  color: #fff;
  padding: 12px;
  border: none;
  width: 100%;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
}

.feedback-card button:hover {
  background: #303f9f;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
  }
}
`;

const ContactPage = () => {

  // SEPARATED FORM HANDLERS ----------
  const {
    register: registerMain,
    handleSubmit: handleSubmitMain,
    reset: resetMain,
  } = useForm();

  const {
    register: registerFeedback,
    handleSubmit: handleSubmitFeedback,
    reset: resetFeedback,
  } = useForm();

  // MAIN REQUIREMENTS FORM — does NOT affect testimonials
  const onSubmitMain = (data) => {
    console.log("Main Form Submitted:", data);
    alert("Thank you! Your request has been submitted.");
    resetMain();
  };

  // FEEDBACK FORM — saves feedback to testimonials ONLY
  const onSubmitFeedback = (data) => {
    console.log("Feedback Submitted:", data);

    const existing = JSON.parse(localStorage.getItem("testimonials")) || [];

    const newFeedback = {
      name: data.name || "Anonymous User",
      message: data.feedback,
      rating: 5,
    };

    localStorage.setItem("testimonials", JSON.stringify([newFeedback, ...existing]));

    alert("Thank you for your feedback!");
    resetFeedback();
  };

  return (
    <div className="contact-page">
      <GlobalStyle />

      {/* MAIN FORM + COMPANY DETAILS */}
      <div className="contact-wrapper">

        {/* LEFT MAIN FORM */}
        <div className="left-form">
          <h2>Submit Your Requirements</h2>

          <form onSubmit={handleSubmitMain(onSubmitMain)}>
            <input {...registerMain("name", { required: true })} placeholder="Your Name" />
            <input {...registerMain("phone", { required: true })} placeholder="Your Phone" />
            <input {...registerMain("email", { required: true })} placeholder="Your Email" />
            <input {...registerMain("subject")} placeholder="Subject" />
            <textarea {...registerMain("message", { required: true })} placeholder="Your Message"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>

        {/* RIGHT CONTACT DETAILS */}
        <div className="right-details">
          <h3>Contact Us</h3>
          <p><strong>Name:</strong> Siddhivinayak</p>
          <p><strong>Email:</strong> info@siddhivinayak.com</p>
          <p><strong>Call:</strong> +91 74330 77939</p>
          <p><strong>WhatsApp:</strong> +91 96620 74322</p>
          <div className="footer-socials">
                      <a href="https://www.facebook.com/people/Tech-Strota/61550062532070/"><FaFacebookF /></a>
                      <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Ftechstrota%2F&is_from_rle"><FaInstagram /></a>
                      <a href="https://www.youtube.com/@techstrota"><FaYoutube /></a>
                    </div>


          <h3>Address</h3>
          <p>
            156, 1st Floor, C Tower, K10 Atlantis,<br />
            Near Genda Circle, Opp Honest Restaurant,<br />
            Vadodara, Gujarat 390007
          </p>

          <div className="small-map">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18..."
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* FEEDBACK FORM (COMPLETELY SEPARATE) */}
      <div className="feedback-section">
        <h2>Share Your Feedback</h2>

        <div className="feedback-card">
          <form onSubmit={handleSubmitFeedback(onSubmitFeedback)}>
            <input {...registerFeedback("name")} placeholder="Your Name (optional)" />

            <textarea
              {...registerFeedback("feedback", { required: true })}
              placeholder="Write your feedback..."
            ></textarea>

            <button type="submit">Submit Feedback</button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default ContactPage;
