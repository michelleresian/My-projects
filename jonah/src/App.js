import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Packages from './components/Packages';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Services />
      <Packages />
      <Gallery />
      <ContactUs />
    </div>
  );
}

export default App;
