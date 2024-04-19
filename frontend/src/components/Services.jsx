import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Services() {
    const [allService, setAllService] = useState([]);

    const getAllService = async () => {
        try {
            const { data } = await axios.get(`https://satish-portfolio.onrender.com/api/v1/services/get-all-service`);
            setAllService(data?.allService);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllService();
    }, []);
    return (
        <div className="skill-section" id="skill">
            <h1 className="heading">SERVICES</h1>
            <div className="skill-cards">
                {allService.map((s) => (
                    <div key={s._id} className="skill-card">
                        <div className="card-img">
                            <img src={`https://satish-portfolio.onrender.com/${s.image}`} alt="Services Logo" />
                        </div>
                        <div className="card-details" style={{ paddingTop: '10px' }}>
                            <p style={{ color: 'gold' }}>{s?.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
