import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';
import CareerImage from '../assets/career-pic.webp';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (path === '/home') {
      window.location.reload();
    } else {
      navigate(path);
    }
  };

  return (
    <div className="home-container">
      <header className="home-navbar">
        <h1 className="logo">Welcome to Career Growth </h1>
        <div className="button-group">
          <button onClick={() => handleNavigation('/about-us')}>About Us</button>
          <button onClick={() => handleNavigation('/contact')}>Contact Us</button>
          <button onClick={() => handleNavigation('/faq')}>FAQs</button>
          <button onClick={() => handleNavigation('/signup')}>Sign Up</button>
          <button onClick={() => handleNavigation('/login')}>Login</button>
        </div>
      </header>
    
        <div className="text-content">
          <h2>Comprehensive and Effective Placement Portal</h2>
          <p>Welcome to Career Growth, your ultimate destination for career growth and placement success! Our mission is to empower individuals like you by providing a comprehensive platform that connects you with valuable resources, industry insights, and a supportive community. Here, you’ll find personalized learning paths, expert-led courses, and networking opportunities designed to enhance your skills and boost your confidence. Whether you're a recent graduate or an experienced professional, our tools and resources will help you navigate your career journey and secure your dream job. Join us today and take the first step toward a brighter future!</p>
        </div>
        <img src={CareerImage} alt="Placement Portal" className="right-image" />
      {/* </main> */}
      
      {/* Footer Section */}
      <footer className="footer">
         
        <div className="footer-content">
          <div className="footer-links">
            <div>
              <h4>Resources</h4>
              <ul>
                <li>Websites</li>
                <li>Collections</li>
                <li>Elements</li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li>Academy</li>
                <li>Jobs</li>
                <li>Market</li>
              </ul>
            </div>
            <div>
              <h4>Support</h4>
              <ul>
                <li onClick={() => navigate('/faq')}>FAQs</li>
                <li onClick={() => navigate('/about-us')}>About Us</li>
                <li onClick={() => navigate('/contact')}>Contact Us</li>
              </ul>
            </div>
          </div>
          
          <div className="footer-contact">
            <h3>Let's talk</h3>
            <p>Got a project in mind?</p>
          </div>
          
          <div className="social-icons">
            <p>Cookies Policy | Legal Terms | Privacy Policy</p>
            <div className="icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="icon">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
