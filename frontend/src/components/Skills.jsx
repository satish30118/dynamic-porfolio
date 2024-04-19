import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Skills() {
    const [allSkill, setAllSkill] = useState([]);
    const getAllSkill = async () => {
        try {
            const { data } = await axios.get(`https://satish-portfolio.onrender.com/api/v1/skill/get-all-skill`);
            setAllSkill(data?.allSkill);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllSkill();
    }, []);
    return (
        <div className="skill-section" id="skill">
            <h1 className="heading">MY SKILL</h1>
            <div className="skill-cards">
                {allSkill.map((s) => (
                    <div key={s?._id} className="skill-card">
                        <div className="card-img">
                            <img
                               src={`https://satish-portfolio.onrender.com/${s?.image}`}
                               alt="Skill Logo"
                            />
                        </div>
                        <div className="card-details">
                            <p style={{ color: '#CC5500' }}>{s?.title}</p>
                            <p>
                                Level - <span style={{ color: 'rgb(192, 235, 5)' }}>{s?.level}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
