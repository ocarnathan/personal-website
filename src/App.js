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
import MyFormComponent from './components/MyFormComponent';


function App() {
  //When the page loads, the active tab is skills
  const [activeTab, setActiveTab] = useState('skills');
  // activeTab is a variable, setActiveTab is a function that changes the value of activeTab. Here we are setting the initial value of activeTab to 'skills'.
  
  //When the tab is clicked, the active tab is changed to the tab that was clicked
  const handleTabClick = (tab) => { // tab is a variable
    setActiveTab(tab); // setActiveTab is a function
  }
    //When the page loads, the side menu is closed
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
 
  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
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
                  <ul id="sidemenu" style={{ right: isSideMenuOpen ? '0' : '-200px'}}>
                    <li><a href="#header">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Interests</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <i class="fa-solid fa-xmark" onClick={toggleSideMenu} > </i>
                  </ul>
                  <i class="fa-solid fa-bars" onClick={toggleSideMenu} ></i>
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
                               onClick={() => handleTabClick('skills')}>  Skills</p> {/* when clicked, handleTabClick('skills') */}

                              <p className={activeTab === 'experience' ? 'tab-links active-link' : 'tab-links'} // if activeTab is experience, then active-link, else tab-links
                               onClick={() => handleTabClick('experience')}>  Experience</p> {/* when clicked, handleTabClick('experience') */}

                              <p className={activeTab === 'education' ? 'tab-links active-link' : 'tab-links'} // if activeTab is education, then active-link, else tab-links
                               onClick={() => handleTabClick('education')}> Education</p> {/* when clicked, handleTabClick('education') */}

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
                <h1 className="sub-title">My Interests</h1>
                <div className="services-list">
                  <div>
                  <i className="fa-solid fa-laptop-code"></i>
                    <h2>Web Development</h2>
                    <p>I have experience in building web applications using HTML, CSS, and JavaScript. I favor 
                      back-end development and have experience with Python, Node.js, Express, and MongoDB. I feel that as I
                      work on more projects, I will become more proficient in full-stack development.
                      </p>
                    {/* <a href="#">learn more</a> */}
                  </div>
                  <div>
                  <i class="fa-solid fa-mobile-screen-button"></i>
                    <h2>Mobile Development</h2>
                    <p>At this time I have not had the opportunity to work on any mobile development projects. In the near future,
                      I plan to work on an IOS app using Swift. The app will be an independent project. 
                      </p>
                    {/* <a href="#">learn more</a> */}
                  </div>
                  <div>
                  <i class="fa-solid fa-fingerprint"></i>
                    <h2>Cybersecurity</h2>
                    <p>Cybersecurity is a field that I am interested in. 
                      I have taken a few courses that have introduced me to the field. 
                      I plan to pursue a master's degree in cybersecurity at the University of Alabama at Birmingham.
                      </p>
                    {/* <a href="#">learn more</a> */}
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
                      <h3>Generic App</h3>
                      <p>The app connects you to the talented people around the world.
                        Download it from the play store.</p>
                        <a href=""><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                  </div>
                  <div className="work">
                    <img src={work2} alt="work-2"></img>
                    <div className="layer">
                      <h3>Generic App</h3>
                      <p>The app connects you to the talented people around the world.
                        Download it from the play store.</p>
                        <a href=""><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                  </div>
                  <div className="work">
                    <img src={work3} alt="work-3"></img>
                    <div className="layer">
                      <h3>Generic App</h3>
                      <p>The app connects you to the talented people around the world.
                        Download it from the play store.</p>
                        <a href=""><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                  </div>
                </div>
                <a href="#" className="btn">See more</a>
              </div>
            </div>
{/* ----------------contact------------- */}
            <div id="contact">
              <div className="container">
                <div className="row">
                    <div className="contact-left">
                      <h1 className="sub-title">Contact Me</h1>
                      <p><i class="fa-solid fa-paper-plane"></i> obiecarnathan@gmail.com</p>
                      <p><i class="fa-solid fa-phone"></i> 205-0010-0000</p>
                      <div className="social-icons">
                        <a href="https://www.facebook.com/AllIKnowIsAmbition"><i class="fa-brands fa-facebook"></i></a>
                        <a href="https://github.com/ocarnathan"><i class="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/obie-carnathan-5ba660b9/"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://strava.com/athletes/46847031" class="strava-badge- strava-badge-follow" target="_blank"><img src="//badges.strava.com/echelon-sprite-48.png" alt="Strava" /></a>
                      </div>
                      <a href="images/my-cv.pdf" download className="btn btn2">Download CV</a>
                    </div>
                    <div className="contact-right">
                      {/* <form name="submit-to-google-sheet">
                        <input type="text" name="Name" placeholder="Your Name" required></input>
                        <input type="email" name="Email" placeholder="Your Email" required></input>
                        <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                        <button type="submit" className="btn btn2">Submit</button>
                      </form> */}
                      <MyFormComponent />
                      <span id="msg" style={{ visibility: isFormSubmitted ? 'block' : 'hidden' }}>Form submitted!</span>
                    </div>
                </div>
              </div>
              <div className="copyright">
                <p>Copyright @ Obie.</p>
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
