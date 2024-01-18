import Logo from './components/Logo.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Logo>The Big Yellow Sulphur Pile</Logo>
      <img alt="The sulphur pile" className="SulphurImage" src="https://live.staticflickr.com/5253/5574931634_b8027c198d_b.jpg"></img>
      <div className="ButtonHolder">
        <button>About Us</button>
        <button>Testimonials</button>
        <button>Contact Us</button>
      </div>
    </div>
  );
}

export default App;
