import React, { useState } from 'react';
import logo from '../images/logo2.png';

function Header() {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    const toggleSideMenu = () => {
        setIsSideMenuOpen(!isSideMenuOpen);
    };

    return (
            <div className="container" id="container">
                <nav>
                    <img src={logo} className="logo" alt="logo" />
                    <ul id="sidemenu" style={{ right: isSideMenuOpen ? '0' : '-200px' }}>
                        <li><a href="#header">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Interests</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <i className="fa-solid fa-xmark" onClick={toggleSideMenu}></i>
                    </ul>
                    <i className="fa-solid fa-bars" onClick={toggleSideMenu}></i>
                </nav>
                <div className="header-text">
                    <p>Software Engineer</p>
                    <h1>Hi, I'm <span>Obie <br /> Carnathan</span> from Birmingham, AL</h1>
                </div>
            </div>
    );
}

export default Header;