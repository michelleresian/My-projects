import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Modal from './Modal'; 
import './Home.css';

function Home() {
    const [showModal, setShowModal] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="home">
            <div className="hero">
                <header className={`navbar ${isMenuOpen ? 'open' : ''}`}>
                    <div className="container">
                        <nav className={isMenuOpen ? 'open' : ''}>
                            <ul className="nav-links">
                                <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                                <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
                                <li><Link to="packages" smooth={true} duration={500}>Packages</Link></li>
                                <li><Link to="gallery" smooth={true} duration={500}>Gallery</Link></li>
                                <li><Link to="contact" smooth={true} duration={500}>Contact Us</Link></li>
                            </ul>
                        </nav>
                    </div>
                </header>

                {}
                <video autoPlay loop muted className="video-bg">
                    <source src="https://media.istockphoto.com/id/1487778807/video/aerial-view-of-woman-walking-on-incredible-maldivian-beach.mp4?s=mp4-640x640-is&k=20&c=sWwIFYkOsTIV5xFL6fGhOcONr0tm0l4H9deVJHg9xf8=" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {}
                <Modal isOpen={showModal} onClose={closeModal} />

                <div className="header-text">
                    <div className="container">
                        <h1>Welcome to <span>Mara Majesty Tours</span></h1>
                        <p>Discover the wild beauty of Kenya and Tanzania</p>
                    </div>
                    <div className="cta-buttons">
                        {}
                        <button className="btn" onClick={openModal}>Book Now</button>
                        {}
                        <Link to="packages" smooth={true} duration={500}>
                            <button className="btn">Explore Packages</button>
                        </Link>
                        {}
                        <Link to="contact" smooth={true} duration={500}>
                            <button className="btn">Contact Us</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
