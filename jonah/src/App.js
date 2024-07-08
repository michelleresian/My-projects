import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Packages from './components/Packages';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="packages">
        <Packages />
      </Element>
      <Element name="gallery">
        <Gallery />
      </Element>
      <Element name="contact">
        <ContactUs />
      </Element>
    </div>
  );
}

export default App;
