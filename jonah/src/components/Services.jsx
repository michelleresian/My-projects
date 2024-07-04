import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  return (
    <div id="services" className="services-container">
    <h1>  Services </h1>
     
      <div className="services-list">
        <div className="service-item">
          <h2>Wildlife Safaris</h2>
          <p>Explore the wilderness and observe exotic wildlife in their natural habitats.</p>
          <Link to="/wildlife-safaris" className="learn-more">Learn more</Link>
        </div>
        <div className="service-item">
          <h2>Photography Tours</h2>
          <p>Capture stunning landscapes and wildlife through guided photography tours.</p>
          <Link to="/photography-tours" className="learn-more">Learn more</Link>
        </div>
        <div className="service-item">
          <h2>Cruise Adventures</h2>
          <p>Experience luxury cruises offering breathtaking views and cultural experiences.</p>
          <Link to="/cruise-adventures" className="learn-more">Learn more</Link>
        </div>
        <div className="service-item">
          <h2>Hiking Expeditions</h2>
          <p>Embark on challenging yet rewarding hiking adventures to scenic mountain peaks.</p>
          <Link to="/hiking-expeditions" className="learn-more">Learn more</Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
