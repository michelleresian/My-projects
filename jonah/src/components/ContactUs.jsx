import React from 'react';
import './ContactUs.css';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { IoLogoWhatsapp } from 'react-icons/io';

const ContactUs = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-row">
        <div className="contact-left">
          <h1 className="sub-title">Contact Us</h1>
          <p><FaEnvelope /> maramajesty@gmail.com</p>
          <p><FaPhoneAlt /> 0734280255</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/_.resiann"><FiInstagram /></a>
            <a href="https://twitter.com/MResian15046"><FiTwitter /></a>
            <a href="https://wa.me/254734280255"><IoLogoWhatsapp /></a>
            <a href="https://www.linkedin.com/in/michelle-resian-b2b163279"><FiLinkedin /></a>
          </div>
        
        </div>
        <div className="contact-right">
          <form name="submit-to-google-sheet">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
            <button type="submit" className="button button2">Submit</button>
          </form>
          <span id="msg"></span>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
