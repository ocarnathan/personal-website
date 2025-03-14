import React from 'react';
import {useState} from 'react';

function MyFormComponent() {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzP8SIDLDzIHooCxMCU6b2dZDr_KhGGWJh1x2WozU6235XwBULl6mWaLMc0oojARHM5tw/exec';
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    // Send form data to Google Sheets
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        console.log('Success!', response)// Success message
        setIsFormSubmitted(true); // Show success message to user
        setTimeout(() => setIsFormSubmitted(false), 5000); // Hide success message after 5 seconds
        form.reset(); // Reset form
      })
      .catch(error => console.error('Error!', error.message)); // Error message
  }

  return ( // Form component
    <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
      {/* Form elements */}
        <input type="text" name="Name" placeholder="Your Name" required></input>
        <input type="email" name="Email" placeholder="Your Email" required></input>
        <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
        <button type="submit" className="btn btn2">Submit</button>
        <span id="msg" style={{ visibility: isFormSubmitted ? 'visible' : 'hidden' }}>Form submitted!</span>
    </form>
    
  );
}

export default MyFormComponent;