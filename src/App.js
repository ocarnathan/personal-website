import photo from './GradPic.jpg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to my portfolio</h1>
      <p>Under construction</p>
      <img src={photo} alt="Grad Pic" class="Grad_Pic"></img>
      <p>
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
      </p>
    </div>
  );
}

export default App;
