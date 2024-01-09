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
                        <li><a href="https://drive.google.com/file/d/1Ujq-Cm0T9eHzVPJrGGnzKeM6G9e6Xge7/view?usp=drive_link" target="_blank">Resume</a></li>
                        <li><a href="#">Contact Me</a></li>
                        <li><a href="https://github.com/ocarnathan" target="_blank">GitHub</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Navbar