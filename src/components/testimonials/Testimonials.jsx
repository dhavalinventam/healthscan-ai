import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonials.scss';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      text: "Finally, I understand my medical reports! The explanations are clear and helpful.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Caregiver",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "As a caregiver, this tool helps me better understand my mother's health reports.",
      rating: 5
    },
    {
      id: 3,
      name: "Dr. Emily Wilson",
      role: "Family Doctor",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      text: "A valuable tool for patients to understand their medical reports better.",
      rating: 5
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      text: "This AI makes complex medical terms so easy to understand. Highly recommended!",
      rating: 5
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Caregiver",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      text: "Perfect for helping my elderly parents understand their test results.",
      rating: 5
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, index) => (
      <span key={index} className="star">★</span>
    ));
  };

  return (
    <section className="testimonials" role="region" aria-label="User testimonials">
      <div className="container">
        <div className="testimonials-content">
          <div className="section-header">
            <h2 className="section-title">What Our Users <span className="gradient-text">Say</span></h2>
          </div>
          <div className="testimonials-slider">
            <Slider {...settings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-slide">
                  <div className="testimonial-card">
                    <div className="testimonial-header">
                      <div className="user-info">
                        <div className="profile-image">
                          <img 
                            src={testimonial.image} 
                            alt={`${testimonial.name} profile`}
                            className="profile-img"
                          />
                        </div>
                        <div className="user-details">
                          <h3 className="user-name">{testimonial.name}</h3>
                          <p className="user-role">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <p className="testimonial-text">{testimonial.text}</p>
                    </div>
                    <div className="testimonial-rating">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 