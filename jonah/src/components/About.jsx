import React, { useState } from 'react';
import './About.css'; // Ensure to create and import your About.css file for styling

const About = () => {
  const [activeTab, setActiveTab] = useState('about'); // State to manage active tab

  // Function to switch tabs
  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div id="About">
      <div className="container">
        <div className="row">
          <div className="About-col-1">
          <img
              src="https://images.unsplash.com/photo-1515658323406-25d61c141a6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2VueWF8ZW58MHx8MHx8fDA%3D"
              alt="About Mara Majesty Tours"
            />
            
            
          </div>
          <div className="About-col-2">
            <h2 className="sub-title">About Mara Majesty Tours</h2>
            <p>
              Discover the wild beauty of Kenya and Tanzania with Mara Majesty Safaris. We specialize in luxury wildlife and cultural safaris, offering immersive experiences that emphasize conservation, community engagement, and sustainable tourism practices.
            </p>
            <div className="tab-titles">
              <p
                className={`tab-links ${activeTab === 'about' ? 'active-link' : ''}`}
                onClick={() => openTab('about')}
              >
                About Us
              </p>
              <p
                className={`tab-links ${activeTab === 'mission' ? 'active-link' : ''}`}
                onClick={() => openTab('mission')}
              >
                Our Mission
              </p>
              <p
                className={`tab-links ${activeTab === 'team' ? 'active-link' : ''}`}
                onClick={() => openTab('team')}
              >
                Our Team
              </p>
            </div>
            <div className={`tab-contents ${activeTab === 'about' ? 'active-tab' : ''}`} id="about">
              <p>
                Mara Majesty Safaris is dedicated to providing unforgettable safari experiences that connect travelers with the natural wonders and rich cultures of East Africa.
              </p>
            </div>
            <div className={`tab-contents ${activeTab === 'mission' ? 'active-tab' : ''}`} id="mission">
              <p>
                Our mission is to promote conservation, support local communities, and ensure every guest experiences the beauty of East Africa responsibly and sustainably.
              </p>
            </div>
            <div className={`tab-contents ${activeTab === 'team' ? 'active-tab' : ''}`} id="team">
              <p>
                Meet our passionate team of guides and experts who are committed to delivering personalized and enriching safari adventures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
