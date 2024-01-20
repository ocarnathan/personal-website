import photo from './GradPic.jpg';
import './App.css';
import React from 'react';


function Resume() {
    return (
      <div className="Projects">
        <h1>Projects</h1>
        <p>Under construction</p>
        <img src={photo} alt="Grad Pic" class="Grad_Pic"></img>
        <div className="project">
          <img src="#" alt="Project 1" /> {/* Replace # with your image link */}
          <a href="#">Project 1</a> {/* Replace # with your project link */}
          <p>Project 1 description</p>
        </div>
        <div className="project">
          <img src="#" alt="Project 2" /> {/* Replace # with your image link */}
          <a href="#">Project 2</a> {/* Replace # with your project link */}
          <p>Project 2 description</p>
        </div>
        <div className="project">
          <img src="#" alt="Project 3" /> {/* Replace # with your image link */}
          <a href="#">Project 3</a> {/* Replace # with your project link */}
          <p>Project 3 description</p>
        </div>
        <div className="project">
          <img src="#" alt="Project 4" /> {/* Replace # with your image link */}
          <a href="#">Project 4</a> {/* Replace # with your project link */}
          <p>Project 4 description</p>
        </div>
      </div>
    );
  }
  
  export default Resume;