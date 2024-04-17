import React from 'react';

function Projects() {
    return (
        <div className="project-section" id="project">
            <h1 className="heading">MY PROJECT</h1>
            <div className="project-cards">
                <a href="" target='_blank'>
                    <div className="project-card">
                        <div className="p-card-img">
                            <img
                                src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1   "
                                alt=""
                            />
                        </div>
                        <div className="p-card-details">
                            <p className="p-text">EDUCATIONAL PLATEFORM</p>

                            <p className="project-details">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit obcaecati quo assumenda, expedita
                                quisquam quasi soluta sequi! Porro delectus illo ipsam nemo, culpa, illum perspiciatis conse
                            </p>
                            <p className="p-text">
                                TECH STACK - <span style={{ color: 'rgb(192, 235, 5)' }}>MERN</span>
                            </p>
                        </div>
                    </div>
                </a>
                <a href="" target='_blank'>
                    <div className="project-card">
                        <div className="p-card-img">
                            <img
                                src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1   "
                                alt=""
                            />
                        </div>
                        <div className="p-card-details">
                            <p className="p-text">EDUCATIONAL PLATEFORM</p>

                            <p className="project-details">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit obcaecati quo assumenda, expedita
                                quisquam quasi soluta sequi! Porro delectus illo ipsam nemo, culpa, illum perspiciatis conse
                            </p>
                            <p className="p-text">
                                TECH STACK - <span style={{ color: 'rgb(192, 235, 5)' }}>MERN</span>
                            </p>
                        </div>
                    </div>
                </a>
                
            </div>
        </div>
    );
}

export default Projects;
