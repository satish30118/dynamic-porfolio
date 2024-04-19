import React from 'react';
import { Outlet } from 'react-router-dom';

function Timeline() {
    return (
        <div className="experience-section" id='experience'>
            <div className="heading">EXPERIENCE</div>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <div className="experience-section-left">
                    <div>2023 - Present</div>
                    <div>2022 - 2023</div>
                    <div>2019 - 2022</div>
                </div>

                <div className="experience-section-right">
                    <div className="">
                        <div className='job-position'><span style={{color:"#CC5500"}}>position</span></div>
                        <div className='job-company'><span style={{color:"gold"}}>Company Name</span></div>
                        <p className='job-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quaerat dolor sunt quidem molestias reiciendis dolorum illum aspernatur, quasi ea reprehenderit sapiente hic rem modi accusamus id. Voluptates dicta, impedit amet dolore labore, odit sint soluta, nostrum reprehenderit veniam voluptas.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timeline;
