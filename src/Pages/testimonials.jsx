import React from 'react';
import { FaStar } from "react-icons/fa";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  { name: 'John', message: "There services are amazing!😊",
    rating: 5, },
  { name: 'Jane', message: "Great service and friendly staffs!👌",
    rating: 4, },
  { name: 'Alice', message: "Really happy with Company! My package arrived on time and in perfect condition.!😊",
    rating: 5, },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {testimonials.map((t, index) => (
        <div key={index}>
          <p>"{t.message}"</p>
          <h4>- {t.name}</h4>
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
    </Slider>
  );
};

// ✅ Export the component, not the array
export default Testimonials;
