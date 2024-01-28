import photo from './Grad_Pic.png';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './images/logo2.png';
import user from './images/study.jpeg';
import work1 from './images/work-1.png'
import work2 from './images/work-2.png'
import work3 from './images/work-3.png'
import {useState} from 'react';

function App() {
  //When the page loads, the active tab is skills
  const [activeTab, setActiveTab] = useState('skills');
  // activeTab is a variable, setActiveTab is a function that changes the value of activeTab. Here we are setting the initial value of activeTab to 'skills'.
  
  //When the tab is clicked, the active tab is changed to the tab that was clicked
  const handleTabClick = (tab) => { // tab is a variable
    setActiveTab(tab); // setActiveTab is a function
  }

  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={
            <>
              {/* <h1 className="Hello">Hi, my name is Obie</h1> */}
              {/* <p>Under construction</p> */}
            <div className="header" id="header">
              <div className="container" id="container"> 
                <nav>
                  <img src={logo} className="logo"></img>
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
{/* -------------about me section---------------- */}
              <div id="about">
                  <div className="container">
                      <div className="row">
                        <div className="about-column-1">
                            <img src={user} alt=''></img>
                        </div>
                        <div className="about-column-2">
                            <h1 className="sub-title">About Me</h1>
                            <p className="bio">
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
                            <div className="tab-titles">
                              <p className={activeTab === 'skills' ? 'tab-links active-link' : 'tab-links'} // if activeTab is skills, then active-link, else tab-links
                               onClick={() => handleTabClick('skills')}>Skills</p> {/* when clicked, handleTabClick('skills') */}
                              <p className={activeTab === 'experience' ? 'tab-links active-link' : 'tab-links'} // if activeTab is experience, then active-link, else tab-links
                               onClick={() => handleTabClick('experience')}>Experience</p> {/* when clicked, handleTabClick('experience') */}
                              <p className={activeTab === 'education' ? 'tab-links active-link' : 'tab-links'} // if activeTab is education, then active-link, else tab-links
                               onClick={() => handleTabClick('education')}>Education</p> {/* when clicked, handleTabClick('education') */}
                            </div>
                            <div className={activeTab === 'skills' ? 'tab-contents active-tab' : 'tab-contents'} id="skills">
                              <ul>
                                <li><span>UI/UX</span><br></br>Designing Web/App interfaces</li>
                                <li><span>Web Development</span><br></br>Web App Development</li>
                                <li><span>App Development</span><br></br>Building Android/IOS apps</li>
                              </ul>
                            </div>
                            <div className={activeTab === 'experience' ? 'tab-contents active-tab' : 'tab-contents'} id="experience">
                              <ul>
                                <li><span>N/A</span><br></br>No experience at this time.</li>
                                {/* <li><span>Web Development</span><br></br>Web App Development</li>
                                <li><span>App Development</span><br></br>Building Android/IOS apps</li> */}
                              </ul>
                            </div>
                            <div className={activeTab === 'education' ? 'tab-contents active-tab' : 'tab-contents'} id="education">
                              <ul>
                                <li><span>2020-2023</span><br></br>Bachelor's of Science in Computer Science</li>
                                {/* <li><span>Web Development</span><br></br>Web App Development</li>
                                <li><span>App Development</span><br></br>Building Android/IOS apps</li> */}
                              </ul>
                            </div>
                            {/* <iframe height='454' width='300' frameborder='0' allowtransparency='true' scrolling='no' src='https://www.strava.com/athletes/46847031/latest-rides/4f4353f485c18a89826633b4d1ba8ccac731aa8d'></iframe> */}
                        </div>
                      </div>
                  </div>
              </div>
{/* -------------Services---------------- */}         
              <div id="services">
              <div className="container">
                <h1 className="sub-title">My Services</h1>
                <div className="services-list">
                  <div>
                  <i className="fa-solid fa-laptop-code"></i>
                    <h2>Web Design</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Aliquam tristique ornare dictum. Nunc quis magna neque. 
                      Suspendisse pretium, nibh non tempor porttitor, nunc ipsum 
                      scelerisque lacus, sed tristique turpis turpis et massa. 
                      </p>
                    <a href="#">learn more</a>
                  </div>
                  <div>
                  <i className="fa-solid fa-crop"></i>
                    <h2>UI/UX design</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Aliquam tristique ornare dictum. Nunc quis magna neque. 
                      Suspendisse pretium, nibh non tempor porttitor, nunc ipsum 
                      scelerisque lacus, sed tristique turpis turpis et massa. 
                      </p>
                    <a href="#">learn more</a>
                  </div>
                  <div>
                  <i className="fa-brands fa-app-store"></i>
                    <h2>Web Design</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Aliquam tristique ornare dictum. Nunc quis magna neque. 
                      Suspendisse pretium, nibh non tempor porttitor, nunc ipsum 
                      scelerisque lacus, sed tristique turpis turpis et massa. 
                      </p>
                    <a href="#">learn more</a>
                  </div>
                </div>
              </div>
            </div>
{/* -------------portfolio---------------- */}
            <div id="portfolio">
              <div className="container">
                <h1 className="sub-title">My Work/Projects</h1>
                <div className="work-list">
                  <div className="work">
                    <img src={work1} alt="work-1"></img>
                    <div className="layer">
                      <h3>Social Media App</h3>
                      <p>The app connects you to the talented people around the world.
                        Download it from the play store.</p>
                        <a href=""><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                  </div>
                  <div className="work">
                    <img src={work2} alt="work-2"></img>
                    <div className="layer">
                      <h3>Music App</h3>
                      <p>The app connects you to the talented people around the world.
                        Download it from the play store.</p>
                        <a href=""><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                  </div>
                  <div className="work">
                    <img src={work3} alt="work-3"></img>
                    <div className="layer">
                      <h3>Online Shopping App</h3>
                      <p>The app connects you to the talented people around the world.
                        Download it from the play store.</p>
                        <a href=""><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                  </div>
                </div>
                <a href="#" className="btn">See more</a>
              </div>
            </div>
          </div>
  
            </>
          } />
          
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
