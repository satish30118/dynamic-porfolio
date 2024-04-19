import React, { useEffect, useState } from 'react';
import TestimonialSlider from './TestimonialSlider';
import axios from 'axios';

const Testimonials = () => {
  const [allTestimonial, setAllTestimonial] = useState([]);

  const getAllTesti = async () => {
    try {
        const { data } = await axios.get(`https://satish-portfolio.onrender.com/api/v1/testimonial/get-all-testimonial`);
        setAllTestimonial(data?.allTestimonial);
    } catch (error) {
        console.log(error);
    }
};

useEffect(() => {
    getAllTesti();
}, []);

  return (
    <div className="testimonial-section">
      <h1 className='heading'>Testimonials</h1>
      <TestimonialSlider testimonials={allTestimonial} intervalTime={3000} />
    </div>
  );
};

export default Testimonials;
