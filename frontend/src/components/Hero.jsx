import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Hero() {
    const [user, setUser] = useState({});
    const getProfileData = async () => {
        try {
            const { data } = await axios.get(`http://localhost:8000/api/v1/auth/get-all-user`);
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
        <div className="hero-section">
            <div className="hero-section-left">
                <div>
                    <p className="hs-text1">
                        <span style={{ color: 'rgb(192, 235, 5)', fontWeight: '600' }}>Hey There,</span> I'm {user.name}
                    </p>
                </div>
                <div>
                    <p className="hs-text2">
                        I'm <span style={{ color:'#CC5500', fontWeight: '600' }}>{user.occupation} </span>
                    </p>
                </div>
                <div>
                    <p className="hs-text3">{user.description}</p>
                </div>
                <div>
                    <a href={user.resumeLink} target='_blank'>
                        <button className="btn hs-btn">Resume</button>
                    </a>
                    <a href="#contact">
                        <button className="btn hs-btn">Hire Me</button>
                    </a>
                </div>
            </div>
            <div className="hero-section-right">
                <img
                    src={`http://localhost:8000/${user?.image}`}
                    alt="user profile"
                />
            </div>
        </div>
    );
}

export default Hero;
