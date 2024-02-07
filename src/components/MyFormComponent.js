import React from 'react';

function MyFormComponent() {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwhECFpWBxV5gIMPDMw6xYrre9iXJzUQjZkDkao9PIDIV-YrJDZauYkx6MGjAnaTnlT2g/exec';

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message));
  }

  return (
    <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
      {/* Form elements */}
        <input type="text" name="Name" placeholder="Your Name" required></input>
        <input type="email" name="Email" placeholder="Your Email" required></input>
        <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
        <button type="submit" className="btn btn2">Submit</button>
    </form>
  );
}

export default MyFormComponent;