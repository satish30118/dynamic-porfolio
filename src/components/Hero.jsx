import React from 'react';

function Hero() {
    return (
        <div className="hero-section">
            <div className="hero-section-left">
                <div>
                    <p className="hs-text1">
                        <span style={{ color: 'rgb(192, 235, 5)', fontWeight:"600"}}>Hey There,</span> I'm Satish Maurya
                    </p>
                </div>
                <div>
                    <p className="hs-text2">
                        I'm Full Stack  <span style={{ color: 'rgb(192, 235, 5)', fontWeight:"600"}}>Web Developer </span>
                    </p>
                </div>
                <div>
                    <p className="hs-text3">Are you looking for full stack developer, who work hard and complete the task before deadline.</p>
                </div>
                <div>
                  
                    <button className="btn hs-btn">Resume</button>
                    <a href="#contact"><button className="btn hs-btn">Hire Me</button></a>
                </div>
            </div>
            <div className="hero-section-right">
                <img
                    src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1   "
                    alt=""
                />
            </div>
        </div>
    );
}

export default Hero;
