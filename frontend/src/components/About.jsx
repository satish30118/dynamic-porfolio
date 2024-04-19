import axios from 'axios';
import React, { useEffect, useState } from 'react';

function About() {
    const [user, setUser] = useState({});
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
                <img
                    src={`https://satish-portfolio.onrender.com/${user?.image}`}
                    alt="user profile"
                />
            </div>
            <div className="about-section-right">
                <div className="about-heading">
                    <h1 style={{ textAlign: 'left' }}>ABOUT ME</h1>
                </div>
                <div>
                  <button className="btn">Bio</button>
                  <button className='btn'>Education</button>
                </div>
                <div className="about-bio">{user?.bio}</div>
            </div>
            <div></div>
        </div>
    );
}

export default About;
