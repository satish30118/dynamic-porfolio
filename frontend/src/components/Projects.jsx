import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Projects() {
    const [allProject, setAllProject] = useState([]);
    const [active, setActive] = useState({});
    const getAllProject = async () => {
        try {
            const { data } = await axios.get(`https://satish-portfolio.onrender.com/api/v1/project/get-all-project`);
            setAllProject(data?.allProject);
            setActive(data?.allProject[0]);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllProject();
    }, []);
    return (
        <div className="project-section" id="project">
            <h1 className="heading">MY PROJECT</h1>
            <div className="experience">
                    <div className="experience-section-left">
                        {allProject.map((e) => (
                            <div
                                key={e._id}
                                onClick={() => {
                                    setActive(e);
                                }}
                                style={{ background: `${active._id == e._id ? 'rgb(9, 9, 31)' : ''}` }}
                            >
                                {e.heading}
                            </div>
                        ))}
                    </div>

                    <div className="experience-section-right">
                        <div style={{ display: `${active ? 'block' : 'none'}` }}>
                            <div className="job-position">
                                <span style={{ color: '#CC5500' }}>{active.title}</span>
                            </div>
                            <div className="job-company">
                                <span style={{ color: 'gold' }}>{active.techStack}</span>
                            </div>
                            <p className="job-description">{active.description}</p>
                            <a href={active.link} target="_blank" style={{ color: 'blue' }}>
                                {active.link ? 'Project Live Link' : '.'}
                            </a>
                            <div className="manage-btn">
                                <button
                                    className="btn update-btn"
                                    onClick={() => {
                                        setPopUp(true);
                                        setUpdateForm(true);
                                        setData(active);
                                    }}
                                >
                                    Update
                                </button>
                                <button
                                    className="btn delete-btn"
                                    onClick={() => {
                                        setDeletePopUp(true);
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                        <div>
                            <img className="projectImage" src={`https://satish-portfolio.onrender.com/${active.image}`} alt="Project Image" />
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Projects;
