import React, { useState, useEffect } from 'react';

const TestimonialSlider = ({ testimonials, intervalTime }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((currentSlide) => (currentSlide + 1) % testimonials.length);
        }, intervalTime);

        return () => clearInterval(interval);
    }, [testimonials.length, intervalTime]);

    return (
        <div className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
                <div key={index} className={index === currentSlide ? 'slide active' : 'slide'}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                            src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1   "
                            alt=""
                            style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                        />
                        <div style={{ marginLeft: '15px' }}>
                            <h2 style={{ color: '#CC5500' }}>{testimonial.author}</h2>
                            <h3 style={{ color: 'gold' }}>{testimonial.position}</h3>
                        </div>
                    </div>

                    <p>{testimonial.text}</p>
                </div>
            ))}
        </div>
    );
};

export default TestimonialSlider;
