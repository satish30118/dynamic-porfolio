import React from 'react';

function Projects() {
    return (
        <div className="project-section" id="project">
            <h1 className="heading">MY PROJECT</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems:"center" }}>
                <div className="experience-section-left">
                    <div>Inventory Management</div>
                    <div>Chat Application</div>
                    <div>E-commerce Website</div>
                    <div>Educational Website</div>
                </div>

                <div className="experience-section-right">
                    <div className="">
                        <div className="job-position">
                            <span style={{ color: '#CC5500' }}>Title</span>
                        </div>
                        <div className="job-company">
                            <span style={{ color: 'gold' }}>Tech Stack - MERN</span>
                        </div>
                        <p className="job-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quaerat dolor sunt quidem molestias reiciendis dolorum
                            illum aspernatur, quasi ea reprehenderit sapiente hic rem modi accusamus id. Voluptates dicta, impedit amet dolore labore,
                            odit sint soluta, nostrum reprehenderit veniam voluptas. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem enim commodi accusantium pariatur doloremque minima architecto blanditiis dolores magni eveniet.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
