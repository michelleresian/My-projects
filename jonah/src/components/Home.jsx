import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal'; // Adjust the path as per your file structure
import './Home.css';

function Home() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="home">
      <div className="hero">
        <header className="navbar">
          <div className="container">
            <nav>
              <ul className="nav-links">
                <li><Link to="#home">Home</Link></li>
                <li><Link to="#about">About</Link></li>
                <li><Link to="#services">Services</Link></li>
                <li><Link to="#packages">Packages</Link></li>
                <li><Link to="#gallery">Gallery</Link></li>
                <li><Link to="#contact">Contact Us</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        
        {/* Video background */}
        <video autoPlay loop muted className="video-bg">
          <source src="https://media.istockphoto.com/id/1487778807/video/aerial-view-of-woman-walking-on-incredible-maldivian-beach.mp4?s=mp4-640x640-is&k=20&c=sWwIFYkOsTIV5xFL6fGhOcONr0tm0l4H9deVJHg9xf8=" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Modal component */}
        <Modal isOpen={showModal} onClose={closeModal} />

        <div className="hero-text">
          <h1>Welcome to Be Mara Majesty Tours</h1>
          <p>Discover the wild beauty of Kenya and Tanzania</p>
          <div className="cta-buttons">
            {/* Book Now button */}
            <button className="btn" onClick={openModal}>Book Now</button>
            {/* Explore Packages button */}
            <Link to="/packages">
              <button className="btn">Explore Packages</button>
            </Link>
            {/* Contact Us button */}
            <Link to="/contact">
              <button className="btn">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
