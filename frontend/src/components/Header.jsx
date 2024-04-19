import React from 'react';

function Header() {
    return (
        <div className="header">
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
    );
}

export default Header;
