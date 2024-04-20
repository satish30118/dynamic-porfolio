import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useAuth } from '../../contextAPI/authContext';

const Dashboard = () => {
    const [auth,] = useAuth();
    return (
        <div className="dashboard-page">
            <div className="dashboard-menu">
                <h2 className='heading'>Admin</h2>
                <div>
                    <img
                        src={`https://satish-portfolio.onrender.com/${auth?.user?.image}`}
                        alt=""
                    />
                </div>
                <NavLink to={"/admin/dashboard/about"}>About Me</NavLink>
                <NavLink to={"/admin/dashboard/skill"}>My Skill</NavLink>
                <NavLink to={"/admin/dashboard/project"}>Project</NavLink>
                <NavLink to={"/admin/dashboard/services"}>Services</NavLink>
                <NavLink to={"/admin/dashboard/experiences"}>Experiences</NavLink>
                <NavLink to={"/admin/dashboard/education"}>Education</NavLink>
                <NavLink to={"/admin/dashboard/contact"}>My Contact </NavLink>
                <NavLink to={"/admin/dashboard/contact-form"}>Contact Form</NavLink>

                <NavLink to={"/admin/dashboard/testimonial"}>Testimonial</NavLink>
            </div>
            <div className="dashboard-content">
                <Outlet />
            </div>
            <ToastContainer position="top-center" autoClose={200} theme="colored" />
            {/* Same as */}
            <ToastContainer />
        </div>
    );
};

export default Dashboard;
