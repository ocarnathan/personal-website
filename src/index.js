import React from 'react'; // import React from 'react';
import ReactDOM from 'react-dom/client'; // import ReactDOM from 'react-dom';
import App from './App'; // import App from './App';

/* This is the entry point for the React app.
 The root variable is used to render the App component to the DOM.
 The DOM is the Document Object Model, which is a programming interface for HTML and XML documents.
 */
const root = ReactDOM.createRoot(document.getElementById('root')); // const root = document.getElementById('root');
root.render(
    <App />
);


