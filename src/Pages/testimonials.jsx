import React from 'react';
import { FaStar } from "react-icons/fa";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
.testimonials {
  text-align: center;
  padding: 60px 20px;
  background: #fff;
  font-family: "Poppins", sans-serif;
}

.testimonials h2 {
  font-size: 28px;
  margin-bottom: 40px;
  color: #222;
}

.testimonials-grid {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.testimonial-card {
  background: #f9f9f9;
  border-radius: 12px;
  padding: 25px;
  width: 300px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease;
  margin: 0 10px;
}

.testimonial-card:hover {
  transform: translateY(-5px);
}

.customer-img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}

.stars {
  color: #ffb400;
  font-size: 18px;
  margin-bottom: 10px;
}

.testimonial-card p {
  color: #555;
  font-size: 15px;
  margin-bottom: 15px;
}

.testimonial-card h4 {
  color: #333;
  font-weight: 600;
}
`;

const testimonials = [
  {
    name: 'John',
    message: "Their services are amazing! 😊",
    rating: 5,
  },
  {
    name: 'Jane',
    message: "Great service and friendly staff! 👌",
    rating: 4,
  },
  {
    name: 'Alice',
    message:
      "Really happy with Company! My package arrived on time and in perfect condition! 😊",
    rating: 5,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,          // Show 3 cards at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [             // Make responsive for smaller screens
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <>
      <GlobalStyle />
      <div className="testimonials">
        <h2>Feedback From Real Customers</h2>
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    color={i < t.rating ? "#ffc107" : "#e4e5e9"}
                  />
                ))}
              </div>
              <p>"{t.message}"</p>
              <h4>- {t.name}</h4>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Testimonials;
