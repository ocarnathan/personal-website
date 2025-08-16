import projects from '../data/projects';

function Portfolio() {

    return (
        <div id="portfolio">
            <div className="container">
                <h1 className="sub-title">My Work/Projects</h1>
                <h2 className="temp">Tap/Hover over an image for summary and a link to the repository or live app.</h2>
                <div className="work-list">
                    {/* 3. Map over the projects array */}
                    {projects.map((project) => (
                        // 4. Add a unique key to the parent element
                        <div className="work" key={project.id}>
                            <img src={project.image} alt={project.alt} />
                            <div className="layer">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;