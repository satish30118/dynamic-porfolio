import React from 'react';
import TestimonialSlider from './TestimonialSlider';

const Testimonials = () => {
  const testimonials = [
    { author: 'John Doe', position:"CEO, XYZ", text: 'Amazing service, I highly recommend it! Great experience from start to finish.I couldn\'t be happier with the results.Amazing service' },
    { author: 'Jane Smith',position:"CEO, XYZ", text: 'I couldn\'t be happier with the results.Amazing service, I highly recommend it! Great experience from start to finish.' },
    { author: 'Bob Johnson',position:"CEO, XYZ", text: 'Great experience from start to finish.Amazing service, I highly recommend it!I couldn\'t be happier with the results.Amazing service' }
  ];

  return (
    <div className="testimonial-section">
      <h1 className='heading'>Testimonials</h1>
      <TestimonialSlider testimonials={testimonials} intervalTime={3000} />
    </div>
  );
};

export default Testimonials;
