import fitness from '../images/Fitness.png'
import srvr from '../images/srvr.png'
import ifarm from '../images/ifarm.png'
import artvision from '../images/artvision.png'
import pizzagrace from '../images/grace.png'
import election from '../images/ElectionDay.png'

function Portfolio() {

    return (
        <div id="portfolio">
            <div className="container">
                <h1 className="sub-title">My Work/Projects</h1>
                <h2 className="temp">Tap/Hover over an image for summary and a link to the repository or live app.</h2>
                <div className="work-list">
                    <div className="work">
                        <img src={srvr} alt="work-3"></img>
                        <div className="layer">
                            <h3>SRVR-Mock food deliver website</h3>
                            <p>As a dedicated backend engineer within a proficient 6-person capstone team, played a pivotal role in
                            crafting SRVR—a sophisticated meal delivery platform reminiscent of HelloFresh. Orchestrated backend
                            development using Python with Flask, powering critical functionalities for user account management, order
                            processing, and subscription handling.</p>
                            <a href="https://github.com/alexp230/CS499-FinalProject" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
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
                            <a href="https://github.com/ocarnathan/_IFarm_Project_Skywalkers" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
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
                            <a href="https://github.com/jzubia25/CS-421-Final-Project" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={pizzagrace} alt="pizza grace"></img>
                        <div className="layer">
                            <h3>Local Pizza Restaurant site</h3>
                            <p>As an intern at Kinetic I was one of the developers responsible for the styling on this company's website and I also made regular updates to their pages to keep imformation current and accurate. The site was built with WordPress.
                            </p>
                            <a href="https://pizzagrace.com/" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={fitness} alt="work-2"></img>
                        <div className="layer">
                            <h3>Fitness Marketing Website</h3>
                            <p>This site is a project that I am working on for a friend who's a personal trainer in the Birmingham area. The vision is for the 
                            finished product to be a website that advertises his services, demonstrate his credibility, and walk potential clients through the process 
                            of investing in his services. The live site is linked below, but it won't be advertised until it is completed and it's also not currently optimized for mobile view.
                            </p>
                            <a href="https://www.meechietaughtme.com/" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={election} alt="work-2"></img>
                        <div className="layer">
                            <h3>Distributed Voting Website</h3>
                            <p>This project is a distributed voting website built using Solidity and the Ethereum blockchain. 
                            It leverages a smart contract deployed on the Coston Testnet to ensure a secure and transparent voting process. 
                            The system enables users to register, cast votes, and view results, using Ethereum addresses and unique voter 
                            tokens to maintain voter integrity and prevent duplicate votes. The website integrates with the blockchain to 
                            dynamically fetch candidates and election results in real time, showcasing the potential of decentralized 
                            applications in election systems.
                            </p>
                            <a href="https://github.com/TD008/web3-g6" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;