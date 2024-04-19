import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Timeline() {
    const [allExperience, setAllExperience] = useState([]);
    const [active, setActive] = useState({});
    const getAllExperience = async () => {
        try {
            const { data } = await axios.get(`https://satish-portfolio.onrender.com/api/v1/timeline/get-all-experience`);
            setAllExperience(data?.allExperience);
            setActive(data?.allExperience[0])
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllExperience();
    }, []);

    return (
        <div className="experience-section" id="experience">
            <div className="heading">EXPERIENCE</div>
            <div className="experience">
                <div className="experience-section-left">
                    {allExperience.map((e) => (
                        <div
                            key={e._id}
                            onClick={() => {
                                setActive(e);
                            }}
                            style={{ background: `${active._id == e._id ? 'rgb(9, 9, 31)' : ''}` }}
                        >
                            {e.startDate} - {e.endDate}
                        </div>
                    ))}
                </div>

                <div className="experience-section-right">
                    <div style={{ display: `${active._id ? 'block' : 'none'}` }}>
                        <div className="job-position">
                            <span style={{ color: '#CC5500' }}>{active.jobPosition}</span>
                        </div>
                        <div className="job-company">
                            <span style={{ color: 'gold' }}>{active.companyName}</span>
                        </div>
                        <p className="job-description">{active.description}</p>
                        <a href={active.link} target="_blank" style={{ color: 'blue' }}>
                            {active.link ? 'See my Work' : '.'}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timeline;
