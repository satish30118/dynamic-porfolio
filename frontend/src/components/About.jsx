import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Education from './Education';

function About() {
    const [user, setUser] = useState({});
    const [active, setActive] = useState(false);
    const getProfileData = async () => {
        try {
            const { data } = await axios.get(`https://satish-portfolio.onrender.com/api/v1/auth/get-all-user`);
            setUser(data?.allUser[0]);
            console.log(user);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProfileData();
    }, []);
    return (
        <div className="about-section" id="about">
            <div className="about-section-left">
                <img src={`https://satish-portfolio.onrender.com/${user?.image}`} alt="user profile" />
            </div>
            <div className="about-section-right">
                <div className="about-heading">
                    <h1 style={{ textAlign: 'left' }}>ABOUT ME</h1>
                </div>
                <div>
                    <button className="btn" style={{ background: `${!active ? 'rgb(14, 54, 54)' : 'transparent'}` }} onClick={() => setActive(false)}>
                        Bio
                    </button>
                    <button className="btn" style={{ background: `${active ? 'rgb(14, 54, 54)' : 'transparent'}` }} onClick={() => setActive(true)}>
                        Education
                    </button>
                </div>
                <div className="about-bio">{!active ? (user?.bio) : <Education />}</div>
            </div>
            <div></div>
        </div>
    );
}

export default About;
