import photo from './GradPic.jpg';
import './App.css';
import React from 'react';


function ContactMe() {
    return (
        <div className="ContactMe">
          <h1>Contact Me</h1>
          <p>If you have any questions or would like to get in touch, please feel free to reach out.</p>
          <ul>
            <li><a href="https://github.com/ocarnathan" target="_blank">Gmail</a></li>
            {/* <li>Phone: (123) 456-7890</li> */}
            <li><a href="https://www.linkedin.com/in/obie-carnathan-5ba660b9/" target="_blank">Linked In</a></li>
            <li><a href="https://github.com/ocarnathan" target="_blank">GitHub</a></li>
          </ul>
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <label>
              Message:
              <textarea name="message" />
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
      );
  }
  
  export default ContactMe;