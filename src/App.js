import photo from './Grad_Pic.png';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './Projects';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import logo from './images/logo2.png';
import user from './images/runner2.jpeg';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/ContactMe" element={<ContactMe />} />
          <Route path="/" element={
            <>
              {/* <h1 className="Hello">Hi, my name is Obie</h1> */}
              {/* <p>Under construction</p> */}
            <div className="header" id="header">
              <div className="container" id="container"> 
                <nav>
                  <img src={logo} class="logo"></img>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </nav>
                <div className="header-text">
                  <p>Software Engineer</p>
                  <h1>Hi, I'm <span>Obie</span> <br></br> Carnathan from Birmingham, AL</h1>
                </div>
              </div>

              <div id="about">
                <div className="container">
                  <div className="row">
                    <div className="about-column-1">
                      <img src={user}></img>
                    </div>
                    <div className="about-column-2">
                      <h1>About Me</h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* <p className="Bio">
        Welcome to my portfolio! I'm a recent graduate from the University of Alabama at Birmingham, 
        where I earned a Bachelor's degree in computer science. My journey has been diverse—I proudly 
        served in the Marine Corps before diving into the world of technology. Driven by a passion for 
        problem-solving and innovation, I aspire to make my mark as a software engineer. My ambition 
        includes contributing my skills to the government sector, but I'm also eager to explore opportunities 
        across different domains. I believe in the power of continuous learning and experience-building, 
        recognizing that each opportunity enriches my expertise. This portfolio is a glimpse into my 
        professional journey, featuring a collection of projects that highlight my technical skills 
        and dedication. I invite you to explore and connect as I embark on the next phase of my career, 
        ready to tackle new challenges and make meaningful contributions in the world of software engineering.
              </p> */}
              {/* <img src={photo} alt="Grad Pic" className="Grad_Pic"></img> */}
              </div>
              {/* <div className="strava">
            <iframe height='454' width='300' frameborder='0' allowtransparency='true' scrolling='no' src='https://www.strava.com/athletes/46847031/latest-rides/4f4353f485c18a89826633b4d1ba8ccac731aa8d'></iframe>
              </div> */}
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
