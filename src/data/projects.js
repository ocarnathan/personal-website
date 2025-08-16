import srvr from '../images/srvr.png';
import ifarm from '../images/ifarm.png';
import artvision from '../images/artvision.png';
import pizzagrace from '../images/grace.png';
import fitness from '../images/Fitness.png';
import election from '../images/ElectionDay.png';

const projects = [
  {
    id: 1,
    image: srvr,
    alt: 'SRVR mock food delivery website',
    title: 'SRVR-Mock food deliver website',
    description: 'As a dedicated backend engineer within a proficient 6-person capstone team, played a pivotal role in crafting SRVR—a sophisticated meal delivery platform reminiscent of HelloFresh. Orchestrated backend development using Python with Flask, powering critical functionalities for user account management, order processing, and subscription handling.',
    link: 'https://github.com/alexp230/CS499-FinalProject'
  },
  {
    id: 2,
    image: ifarm,
    alt: 'iFarm agriculture drone UI',
    title: 'Agriculture Drone UI',
    description: 'As a pivotal member of a 4-person team in a software engineering course, contributed significantly to the development of a sophisticated user interface for drone-based farm management simulation. Utilized Java, Java FX, and Scene Builder to create an intuitive UI enabling users to manage farm items like buildings, crops, and animals.',
    link: 'https://github.com/ocarnathan/_IFarm_Project_Skywalkers'
  },
  {
    id: 3,
    image: artvision,
    alt: 'artvision',
    title: 'Art Vision',
    description: 'As a pivotal backend engineer within a collaborative team of 4 students, contributed significantly to the development of Art Vision—an interactive e-commerce art gallery website. Responsible for architecting and implementing the robust backend infrastructure using Python, Django, and PostgreSQL.',
    link: 'https://github.com/jzubia25/CS-421-Final-Project'
  },
  {
    id: 4,
    image: pizzagrace,
    alt: 'pizzagrace website',
    title: 'Local Pizza Restaurant site',
    description: 'As an intern at Kinetic I was one of the developers responsible for the styling on this company\'s website and I also made regular updates to their pages to keep imformation current and accurate. The site was built with WordPress.',
    link: 'https://pizzagrace.com/'
  },
  {
    id: 5,
    image: fitness,
    alt: 'fitness website',
    title: 'Fitness Marketing Website',
    description: 'This site is a project that I am working on for a friend who\'s a personal trainer in the Birmingham area. The vision is for the finished product to be a website that advertises his services, demonstrate his credibility, and walk potential clients through the process of investing in his services. The live site is linked below, but it won\'t be advertised until it is completed and it\'s also not currently optimized for mobile view.',
    link: 'https://www.meechietaughtme.com/'
  },
  {
    id: 6,
    image: election,
    alt: 'election',
    title: 'Distributed Voting Website',
    description: 'This project is a distributed voting website built using Solidity and the Ethereum blockchain. It leverages a smart contract deployed on the Coston Testnet to ensure a secure and transparent voting process. The system enables users to register, cast votes, and view results, using Ethereum addresses and unique voter tokens to maintain voter integrity and prevent duplicate votes. The website integrates with the blockchain to dynamically fetch candidates and election results in real time, showcasing the potential of decentralized applications in election systems.',
    link: 'https://github.com/TD008/web3-g6'
  },
];

export default projects;