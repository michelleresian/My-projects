import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const handleLearnMore = (service) => {
    setExpandedService(service === expandedService ? null : service);
  };

  return (
    <div id="services" className="services-container">
      <h1>Services</h1>
      <div className="services-list">
        <div className={`service-item ${expandedService === 'Wildlife Safaris' ? 'expanded' : ''}`}>
          <h2>Wildlife Safaris</h2>
          <p>Explore the wilderness and observe exotic wildlife in their natural habitats.</p>
          <button onClick={() => handleLearnMore('Wildlife Safaris')} className="learn-more">Learn more</button>
          {expandedService === 'Wildlife Safaris' && (
            <div className="service-images">
              <img src="https://images.unsplash.com/photo-1503656142023-618e7d1f435a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2lsZGxpZmUlMjBzYWZhcmlzfGVufDB8fDB8fHww" alt="Wildlife Safari 1" />
              <img src="https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdpbGRsaWZlJTIwc2FmYXJpc3xlbnwwfHwwfHx8MA%3D%3D" alt="Wildlife Safari 2" />
              
            </div>
          )}
        </div>

        <div className={`service-item ${expandedService === 'Photography Tours' ? 'expanded' : ''}`}>
          <h2>Photography Tours</h2>
          <p>Capture stunning landscapes and wildlife through guided photography tours.</p>
          <button onClick={() => handleLearnMore('Photography Tours')} className="learn-more">Learn more</button>
          {expandedService === 'Photography Tours' && (
            <div className="service-images">
              <img src="https://images.unsplash.com/photo-1500521680613-a8f77c5cd0f5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdG9ncmFwaHklMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D" alt="Photography Tour 1" />
              <img src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2VueWF8ZW58MHx8MHx8fDA%3D" alt="Photography Tour 2" />
              
            </div>
          )}
        </div>

        <div className={`service-item ${expandedService === 'Cruise Adventures' ? 'expanded' : ''}`}>
          <h2>Cruise Adventures</h2>
          <p>Experience luxury cruises offering breathtaking views and cultural experiences.</p>
          <button onClick={() => handleLearnMore('Cruise Adventures')} className="learn-more">Learn more</button>
          {expandedService === 'Cruise Adventures' && (
            <div className="service-images">
              <img src="https://plus.unsplash.com/premium_photo-1677676123628-1c99cd62dba7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3J1aXNlJTIwYWR2ZW50dXJ8ZW58MHx8MHx8fDA%3D" alt="Cruise Adventure 1" />
              <img src="https://images.unsplash.com/photo-1579005318686-5a86bbb3bf03?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9tYmFzYXxlbnwwfHwwfHx8MA%3D%3D" alt="Cruise Adventure 2" />
              
            </div>
          )}
        </div>

        <div className={`service-item ${expandedService === 'Hiking Expeditions' ? 'expanded' : ''}`}>
          <h2>Hiking Expeditions</h2>
          <p>Embark on challenging yet rewarding hiking adventures to scenic mountain peaks.</p>
          <button onClick={() => handleLearnMore('Hiking Expeditions')} className="learn-more">Learn more</button>
          {expandedService === 'Hiking Expeditions' && (
            <div className="service-images">
              <img src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGlrZSUyMGhpbGxlcnxlbnwwfHwwfHx8MA%3D%3D" alt="Hiking Expedition 1" />
              <img src="https://images.unsplash.com/photo-1504453808030-194d26947354?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlrZSUyMGhpbGxlcnxlbnwwfHwwfHx8MA%3D%3D" alt="Hiking Expedition 2" />
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
