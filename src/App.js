import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <div className="header" id="header">
                <Header />
                <About />
                <Services />
                <Portfolio />
                <Contact />
              </div>
            </>
          } />
        </Routes>
      </div>

    </Router>
  );
}

export default App;