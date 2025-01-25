import photo from './Grad_Pic.png';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './images/logo2.png';
import user from './images/study.png';
import kinetic from './images/kinetic.png'
import fitness from './images/Fitness.png'
import srvr from './images/srvr.png'
import ifarm from './images/ifarm.png'
import artvision from './images/artvision.png'
import pizzagrace from './images/grace.png'
import magic from './images/magic.png'
import { useState } from 'react';
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
                    <ul id="sidemenu" style={{ right: isSideMenuOpen ? '0' : '-200px' }}>
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
                    <h1>Hi, I'm <span>Obie <br></br> Carnathan</span> from Birmingham, AL</h1>
                  </div>
                </div>
                {/* -------------about me section---------------- */}
                <div id="about">
                  <div className="container">
                    <div className="row">
                      <div className="about-column-1">
                        <img src={user} alt='obie'></img>
                      </div>
                      <div className="about-column-2">
                        <h1 className="sub-title">About Me</h1>
                        <p className="bio">
                        Hello and welcome to my website! I'm excited to share my journey as a recent computer science graduate from the University of Alabama at Birmingham, 
                        where I earned my Bachelor's degree with cum laude honors. My background spans from proudly serving in the Marine Corps to immersing myself in the 
                        dynamic field of technology. <br></br><br></br>Driven by a passion for problem-solving and innovation, I'm dedicated to making a positive impact both professionally 
                        and personally as a devoted father and husband. My experiences have honed my ability to tackle complex challenges head-on and find creative solutions. 
                        <br></br><br></br>As an aspiring software engineer, I'm eager to leverage my skills and expertise to contribute meaningfully, particularly within the government sector but 
                        I am open to explore opportunities across different domains. I believe in the power of continuous learning and experience-building, recognizing that each 
                        opportunity enriches my expertise. <br></br><br></br>While this portfolio is in its early stages, I plan to showcase a diverse range of projects that demonstrate my 
                        technical proficiency and dedication to excellence. From personal endeavors to academic assignments and professional ventures, each project represents 
                        a milestone in my journey as a software engineer. <br></br><br></br>As I embark on the next phase of my career, I invite recruiters to explore my resume via the 
                        link below and connect with me to discuss how my skills align with your organization's needs. Let's collaborate on exciting opportunities and together, make impactful 
                        contributions to the world of software engineering.
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
                            <li><span>Database Management</span><br></br>AWS RDS, MySQL, SQLite, PostgreSQL</li>
                            <li><span>Full Stack Web Development</span><br></br>Python, JavaScript, React, PHP, Java, WordPress, Solidity(Web3)</li>
                            <li><span>Cloud Services</span><br></br>AWS services, including AWS S3 for storage and cloud-based solutions.</li>
                            {/* <li><span>App Development</span><br></br>Building Android/IOS apps</li> */}
                          </ul>
                        </div>
                        <div className={activeTab === 'experience' ? 'tab-contents active-tab' : 'tab-contents'} id="experience">
                          <ul>
                            <li><span>January 2024 - May 2024</span><br></br>Kinetic Communications-Developer Intern</li>
                            <li><span>May 2024 - August 2024</span><br></br>Amazon-Software Development Engineer Intern</li>
                            {/* <li><span>Web Development</span><br></br>Web App Development</li>
                                <li><span>App Development</span><br></br>Building Android/IOS apps</li> */}
                          </ul>
                        </div>
                        <div className={activeTab === 'education' ? 'tab-contents active-tab' : 'tab-contents'} id="education">
                          <ul>
                            <li><span>2020-2023</span><br></br>Bachelor's of Science in Computer Science</li>
                            <li><span>Present Studies</span><br></br>Master's of Science in Cyber Security</li>
                            {/* <li><span>Web Development</span><br></br>Web App Development</li>
                                <li><span>App Development</span><br></br>Building Android/IOS apps</li> */}
                          </ul>
                        </div>
                        <iframe height='454' width='600' frameborder='0' allowtransparency='true' scrolling='no' src='https://www.strava.com/athletes/46847031/latest-rides/4f4353f485c18a89826633b4d1ba8ccac731aa8d'></iframe>
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
                          back-end development and database integration using technolies such as AWS RDS, MySQL, SQLite, and PostgreSQL. I have experience with Python, Node.js, Express, and MongoDB. I am currently developing a fitness website for an aspiring personal trainer in the Birmingham area.
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
                          This semester I am currently taking Networking, Network Security, and Modern Cryptography.
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
                    <h2 className="temp">Tap/Hover over an image for summary and a link to the repository or live app.</h2>
                    {/* <h2 className="temp">These are a few of my more notable projects.</h2> */}
                    {/* <h2 className="temp">My personal projects will be listed soon. If you would like to see what I am working on/studying outside of my internship please visit my GitHub.</h2> */}
                    <div className="work-list">
                  <div className="work">
                    <img src={srvr} alt="work-3"></img>
                    <div className="layer">
                      <h3>SRVR-Mock food deliver website</h3>
                      <p>As a dedicated backend engineer within a proficient 6-person capstone team, played a pivotal role in
                        crafting SRVR—a sophisticated meal delivery platform reminiscent of HelloFresh. Orchestrated backend
                        development using Python with Flask, powering critical functionalities for user account management, order
                        processing, and subscription handling.</p>
                        <a href="https://github.com/alexp230/CS499-FinalProject" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                  </div>
                  <div className="work">
                    <img src={ifarm} alt="i farm"></img>
                    <div className="layer">
                      <h3>Agriculture Drone UI</h3>
                      <p>As a pivotal member of a 4-person team in a software engineering course, contributed significantly to the
                          development of a sophisticated user interface for drone-based farm management simulation. Utilized
                          Java, Java FX, and Scene Builder to create an intuitive UI enabling users to manage farm items like buildings,
                          crops, and animals.
                      </p>
                        <a href="https://github.com/ocarnathan/_IFarm_Project_Skywalkers" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                  </div>
                  <div className="work">
                    <img src={artvision} alt="art vision"></img>
                    <div className="layer">
                      <h3>Art Vision</h3>
                      <p>As a pivotal backend engineer within a collaborative team of 4 students, contributed significantly to the
                        development of Art Vision—an interactive e-commerce art gallery website. Responsible for architecting and
                        implementing the robust backend infrastructure using Python, Django, and PostgreSQL.
                      </p>
                        <a href="https://github.com/jzubia25/CS-421-Final-Project" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                  </div>
                  <div className="work">
                    <img src={kinetic} alt="kinetic"></img>
                    <div className="layer">
                      <h3>Web Developer Intern Project</h3>
                      <p>As an intern at Kinetic, I've been tasked to first build a mock website using only HTML/CSS. Once the build is complete, I then must 
                        rebuild it from scratch using PHP and JavaScript.
                      </p>
                        <a href="https://github.com/ocarnathan/Intern_Website_Project" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                  </div>
                  <div className="work">
                    <img src={pizzagrace} alt="pizza grace"></img>
                    <div className="layer">
                      <h3>Local Pizza Restaurant site</h3>
                      <p>As an intern at Kinetic I was one of the developers responsible for the styling on this company's website and I also made regular updates to their pages to keep imformation current and accurate. The site was built with WordPress.
                      </p>
                        <a href="https://pizzagrace.com/" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                  </div>
                  <div className="work">
                    <img src={magic} alt="magic city art"></img>
                    <div className="layer">
                      <h3>Magic City Art Connection</h3>
                      <p>As an intern at Kinetic I was one of the developers responsible for the styling on this company's website and I also made regular updates to their pages to keep imformation current and accurate. The site was built with WordPress.
                      </p>
                        <a href="https://magiccityart.com/" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                  </div>
                  <div className="work">
                    <img src={fitness} alt="work-2"></img>
                    <div className="layer">
                      <h3>Fitness Marketing Website</h3>
                      <p>This site is actually a project that I am working on for a friend who's a personal trainer in the Birmingham area. The vision is for the 
                        finished product to be a website that advertises his services, demonstrate his credibility, and walk potential clients through the process 
                        of investing in his services. The live site is linked below, but it won't be advertised until it is completed and it's also not currently optimized for mobile view.
                      </p>
                        <a href="https://ocarnathan.github.io/" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                  </div>
                </div>
                {/* <a href="#" className="btn">See more</a> */}
                  </div>
                </div>
                {/* ----------------contact------------- */}
                <div id="contact">
                  <div className="container">
                    <div className="row">
                      <div className="contact-left">
                        <h1 className="sub-title">Contact Me</h1>
                        <p><i class="fa-solid fa-paper-plane"></i><a href="mailto:obiecarnathan@gmail.com">obiecarnathan@gmail.com</a></p>
                        <p><i class="fa-solid fa-phone"></i><a href="tel:205-901-3472">205-901-3472</a></p>
                        <p><i class="fa-solid fa-file"></i><a href="https://drive.google.com/file/d/1g0zRMtmLt9ufRPPQtHMkfnlpAyYRTnsb/view?usp=sharing"> Resume</a></p>
                        <div className="social-icons">
                          <a href="https://www.facebook.com/AllIKnowIsAmbition" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                          <a href="https://github.com/ocarnathan" target="_blank"><i class="fa-brands fa-github"></i></a>
                          <a href="https://www.linkedin.com/in/obie-carnathan-5ba660b9/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                          {/* <a href="https://strava.com/athletes/46847031" class="strava-badge- strava-badge-follow" target="_blank"><img src="//badges.strava.com/echelon-sprite-48.png" alt="Strava" /></a> */}
                        </div>
                        {/* <a href="images/my-cv.pdf" download className="btn btn2">Download CV</a> */}
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
                    <p>© 2024 Obie Carnathan. All rights reserved.</p>
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
