import React from 'react';
import { Link } from 'react-router-dom';
import './Packages.css';

const Packages = () => {
  return (
    <div id="packages" className="packages-container">
      
      <h1>Packages</h1>
      <div className="packages-list">
        <div className="package-item">
          <h2>Luxury Safari Adventure</h2>
          <p>Description: Experience the ultimate luxury in the wild. Stay in five-star lodges, enjoy gourmet meals, and explore the savannah with private guided tours.</p>
          <h3>Highlights:</h3>
          <ul>
            <li>Private game drives with expert guides</li>
            <li>Luxury accommodations with all amenities</li>
            <li>Hot air balloon ride over the Serengeti</li>
            <li>Cultural visits to local Maasai villages</li>
          </ul>
          <p>Duration: 7 days</p>
          <p>Price: Starting at $5000 per person</p>
          <Link to="/luxury-safari" className="learn-more">Learn more</Link>
        </div>
        <div className="package-item">
          <h2>Classic Safari Package</h2>
          <p>Description: A perfect blend of adventure and comfort. Discover the Big Five and enjoy comfortable lodges and camps.</p>
          <h3>Highlights:</h3>
          <ul>
            <li>Daily game drives</li>
            <li>Comfortable lodge and camp stays</li>
            <li>Visit to Amboseli National Park and Maasai Mara</li>
            <li>Sundowner experience</li>
          </ul>
          <p>Duration: 5 days</p>
          <p>Price: Starting at $3000 per person</p>
          <Link to="/classic-safari" className="learn-more">Learn more</Link>
        </div>
        <div className="package-item">
          <h2>Family Safari Experience</h2>
          <p>Description: Tailored for families, this package offers a fun and educational adventure for all ages.</p>
          <h3>Highlights:</h3>
          <ul>
            <li>Family-friendly game drives</li>
            <li>Interactive wildlife education sessions</li>
            <li>Child-friendly accommodations and meals</li>
            <li>Cultural activities and nature walks</li>
          </ul>
          <p>Duration: 6 days</p>
          <p>Price: Starting at $3500 per family</p>
          <Link to="/family-safari" className="learn-more">Learn more</Link>
        </div>
        <div className="package-item">
          <h2>Honeymoon Safari Escape</h2>
          <p>Description: A romantic getaway in the heart of the wild. Perfect for newlyweds seeking adventure and seclusion.</p>
          <h3>Highlights:</h3>
          <ul>
            <li>Private game drives and bush dinners</li>
            <li>Luxurious honeymoon suites</li>
            <li>Spa treatments and wellness activities</li>
            <li>Scenic flights over the savannah</li>
          </ul>
          <p>Duration: 8 days</p>
          <p>Price: Starting at $6000 per couple</p>
          <Link to="/honeymoon-safari" className="learn-more">Learn more</Link>
        </div>
      </div>
    </div>
  );
};

export default Packages;
