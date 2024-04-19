import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../contextAPI/authContext';
import { Drawer } from '@mui/material';

const SideDrawer = () => {
    const [auth, setAuth] = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };

    const navigate = useNavigate();

    return (
        <>
            <button
                onClick={toggleDrawer}
                style={{
                    color: 'darkblue',
                    fontSize: '25px',
                    padding: '5px 10px',
                    margin: '10px',
                    background: 'transparent',
                    border: 'none',
                    zIndex: '100',
                }}
            >
                {' '}
                <i className="fa-solid fa-bars"></i>
            </button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="right"
                className="bla bla bla "
                style={{
                    marginTop: '70px',
                    zIndex: '20000000000',
                    width: '100%',
                    maxWidth: '320px',
                    minWidth: '280px',
                }}
            >
                <div className="side-drawer-link">
                    <ul className="nav-list">
                        <a href="#">
                            <li>Home</li>
                        </a>
                        <a href="#about">
                            <li>About</li>
                        </a>
                        <a href="#skill">
                            <li>Skill</li>
                        </a>
                        <a href="#project">
                            <li>Project</li>
                        </a>
                        <a href="#experience">
                            <li>Experience</li>
                        </a>
                        <a href="#contact">
                            <li id="nav-list-contact">Contact</li>
                        </a>
                    </ul>
                </div>
            </Drawer>
        </>
    );
};

export default SideDrawer;
