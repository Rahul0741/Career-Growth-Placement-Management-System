import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/ContactUs.css'; 

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="contact-container">
      <header className="contact-header">
        <button className="home-button" onClick={() => navigate('/')}>Home</button>
        <h1 className="logo">Welcome to Career Growth </h1>
    </header>
      <h2>Contact Us</h2>
      <p>If you have any questions or inquiries, feel free to reach out to us through the following channels:</p>
      <div className="contact-details">
        <p>
          <strong>Email:</strong> support@careergrowthportal.com
        </p>
        <p>
          <strong>Contact Number:</strong> +91 98765 43210
        </p>
        <p>
          <strong>Location:</strong> Bengaluru, Kengeri
        </p>
        <p>
          <strong>Address:</strong> 123 Career Lane, Kengeri, Bengaluru, Karnataka, 560060
        </p>
      </div>
      <p>We look forward to hearing from you!</p>
    </div>
  );
};

export default Contact;
