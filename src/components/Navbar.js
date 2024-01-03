import React, {useState} from 'react';
// import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <> {/* Fragments */}
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">OC</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#">About Me</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Resume</a></li>
                        <li><a href="#">Contact Me</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Navbar