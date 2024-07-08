import React, { useState } from 'react';
import './Modal.css'; // Adjust the CSS file path as per your project structure

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    destination: '', // Updated to include a variety of destinations
    travelDate: '',
    numberOfGuests: '',
    specialRequests: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData); // Example: Log form data for testing
    onClose(); // Close modal after form submission
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={onClose}>Close</button>
            <form onSubmit={handleSubmit}>
              <h2>Book Now</h2>
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="destination">Destination:</label>
                <select id="destination" name="destination" value={formData.destination} onChange={handleInputChange} required>
                  <option value="">Select Destination</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Rwanda">Rwanda</option>
                  {/* Add more options for other East African countries */}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="travelDate">Travel Date:</label>
                <input type="date" id="travelDate" name="travelDate" value={formData.travelDate} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="numberOfGuests">Number of Guests:</label>
                <input type="number" id="numberOfGuests" name="numberOfGuests" value={formData.numberOfGuests} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="specialRequests">Special Requests:</label>
                <textarea id="specialRequests" name="specialRequests" value={formData.specialRequests} onChange={handleInputChange}></textarea>
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
