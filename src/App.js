import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <div className="main" id="main">
                <Header />
                <About />
                <Services />
                <Portfolio />
                <Contact />
                <Footer />
              </div>
            </>
          } />
        </Routes>
      </div>

    </Router>
  );
}

export default App;