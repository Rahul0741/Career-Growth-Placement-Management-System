import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/AboutUs.css'; 

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    
    <div className="about-container">
    <header className="about-header">
        <button className="home-button" onClick={() => navigate('/')}>Home</button>
        <h1 className="logo">Welcome to Career Growth </h1>
    </header>
    
      <h2>About Us</h2>
      <p>
        Welcome to the Career Growth Portal, your ultimate destination for 
        enhancing your career prospects. Launched in March 2024 in Bengaluru, 
        our platform has quickly become a go-to resource for job seekers and 
        professionals looking to advance their careers. 
      </p>
      <p>
        With over 1 million active users, we offer a comprehensive range of 
        tools and resources to help you succeed in today's competitive job market. 
        From resume building and interview preparation to job listings and 
        networking opportunities, we are committed to supporting your career journey. 
      </p>
      <p>
        Join us today and take the next step towards achieving your career goals!
      </p>
    </div>
  );
};

export default AboutUs;
