import { useState } from 'react';
import MyFormComponent from './MyFormComponent';

function Contact() {

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleFormSubmitSuccess = () => {
        setIsFormSubmitted(true);
    };

    return (
        <div id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="sub-title">Contact Me</h1>
                        <p><i className="fa-solid fa-paper-plane"></i><a href="mailto:obiecarnathan@gmail.com">obiecarnathan@gmail.com</a></p>
                        <p><i className="fa-solid fa-phone"></i><a href="tel:205-901-3472">205-901-3472</a></p>
                        <p><i className="fa-solid fa-file"></i><a href="https://drive.google.com/file/d/1HN2cyrqRuIk0KzdSX6azaNmykQdxOjsS/view?usp=sharing" target="_blank" rel="noopener noreferrer"> Resume</a></p>
                        <div className="social-icons">
                            <a href="https://github.com/ocarnathan" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/obie-carnathan-5ba660b9/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="contact-right">
                        <MyFormComponent onFormSubmitSuccess={handleFormSubmitSuccess} />
                        <span id="msg" style={{ visibility: isFormSubmitted ? 'block' : 'hidden' }}>Form submitted!</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;