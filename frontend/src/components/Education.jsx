import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Education = () => {
    const [allEducation, setAllEducation] = useState([]);
    const [active, setActive] = useState({});

    const getAllEducation = async () => {
        try {
            const { data } = await axios.get(`https://satish-portfolio.onrender.com/api/v1/timeline/get-all-education`);
            setAllEducation(data?.allEducation);
            setActive(data?.allEducation[0]);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllEducation();
    }, []);

    return (
        <>
            <div className="education-section">
                <div className="experience">
                    <div className="experience-section-left">
                        {allEducation.map((e) => (
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
                        <div style={{ display: `${active ? 'block' : 'none'}` }}>
                            <div className="job-position">
                                <span style={{ color: '#CC5500' }}>{active.collegeName}</span>
                            </div>
                            <div className="job-company">
                                <span style={{ color: 'gold' }}>CGPA - {active.cgpa}</span>
                            </div>
                            <p className="job-description">{active.description}</p>
                            <a href={active.link} target="_blank" style={{ color: 'blue' }}>
                                {active.link ? 'See my college' : '.'}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Education;
