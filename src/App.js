import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import Sulfur from './components/Sulfur.jsx';
import Logo from './components/Logo.js'
import './App.css';
import About from './About.js';
import Testimonials from './Testimonials.js';
import Contact from './Contact.js';

export default function App() {
  return (
    <div>
      <Logo/>
      <Router>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

function Home() {
  const navigate = useNavigate();

  const navigateAbout = () => {
    // navigate to /about
    navigate('/about');
  };

  const navigateTestimonials = () => {
    // navigate to /testimonials
    navigate('/testimonials');
  };

  const navigateContactUs = () => {
    // navigate to /testimonials
    navigate('/contactus');
  };
  return (
    <div className="App">
      <Logo text={"Big Yellow Sulphur Pile"}></Logo>
      <Sulfur />
      <img alt="The sulphur pile" className="SulphurImage" src="https://live.staticflickr.com/5253/5574931634_b8027c198d_b.jpg"></img>
      <div className="ButtonHolder">
        <button onClick={navigateAbout}>About Us</button>
        <button onClick={navigateTestimonials}>Testimonials</button>
        <button onClick={navigateContactUs}>Contact Us</button>
      </div>
    </div>
  );
}



