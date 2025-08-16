import { useState } from 'react';
import user from '../images/headshot.jpg';


function About() {

      //When the page loads, the active tab is skills
      const [activeTab, setActiveTab] = useState('skills');
      // activeTab is a variable, setActiveTab is a function that changes the value of activeTab. Here we are setting the initial value of activeTab to 'skills'.

      //When the tab is clicked, the active tab is changed to the tab that was clicked
      const handleTabClick = (tab) => { // tab is a variable
        setActiveTab(tab); // setActiveTab is a function
      }

    return (
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
                  <li>
                    <span>Database Management</span><br />
                    MySQL, PostgreSQL, SQLite, DynamoDB, AWS RDS
                  </li>
                  <li>
                    <span>Full Stack Web Development</span><br />
                    JavaScript, React, Python, PHP, Java, WordPress, Solidity (Web3)
                  </li>
                  <li>
                    <span>Cloud Services</span><br />
                    AWS (S3, RDS, and other cloud-based solutions)
                  </li>
                </ul>
              </div>
              <div className={activeTab === 'experience' ? 'tab-contents active-tab' : 'tab-contents'} id="experience">
                <ul>
                  <li><span>January 2024 - May 2024</span><br></br>Kinetic Communications-Web Developer Intern</li>
                  <li><span>May 2024 - August 2024</span><br></br>Amazon (AWS)-Software Development Engineer Intern</li>
                  <li><span>May 2025 - August 2025</span><br></br>Amazon (Alexa)-Software Development Engineer Intern</li>
                </ul>
              </div>
              <div className={activeTab === 'education' ? 'tab-contents active-tab' : 'tab-contents'} id="education">
                <ul>
                  <li><span>2020-2023</span><br></br>Bachelor's of Science in Computer Science</li>
                  <li><span>Present Studies</span><br></br>Master's of Science in Cyber Security</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>   
    );
}

export default About;