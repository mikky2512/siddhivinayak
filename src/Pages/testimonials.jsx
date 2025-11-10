import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    feedback: "There services are amazing!😊",
    rating: 5,
  },
  {
    name: "Jane Smith",
    feedback: "Great service and friendly staffs!👌",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-list">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial">
            <h4>- {t.name}</h4>
            <p>"{t.feedback}"</p>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  color={i < t.rating ? "#ffc107" : "#e4e5e9"} // filled vs empty stars
                />
              ))}
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
