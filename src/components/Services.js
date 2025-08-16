function Services() {

    return (
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
                    </div>
                    <div>
                        <i class="fa-solid fa-mobile-screen-button"></i>
                        <h2>Mobile Development</h2>
                        <p>At this time I have not had the opportunity to work on any mobile development projects. In the near future,
                            I plan to work on an IOS app using Swift. The app will be an independent project.
                        </p>
                    </div>
                    <div>
                        <i class="fa-solid fa-fingerprint"></i>
                        <h2>Cybersecurity</h2>
                        <p>Cybersecurity is a field that I am interested in.
                            This semester I am currently taking Networking, Network Security, and Modern Cryptography.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;