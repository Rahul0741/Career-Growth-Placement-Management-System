import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Profile.css'; 
import CareerProfile from '../assets/Career-pic1.webp'; 

function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/login');
  };

  const navigateToUserDashboard = () => {
    navigate('/user-dashboard');
  };

  if (!user) {
    return <h2>Please log in to access the Profile page</h2>;
  }

  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1>Welcome to Career Growth Portal</h1>
        <div className="logout-button-container">
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
      </header>
      <img
        src={CareerProfile} 
        alt="Placement Portal"
        className="right-image"
      />
      <div className="dashboard-buttons">
        <button onClick={navigateToUserDashboard}>User Dashboard</button>
      </div>
      <div className="profile-text-content">
        <p>
          Congratulations on taking the first step towards advancing your career! Here at Career Growth, we’re dedicated to supporting you in your professional development. Your profile is your gateway to a wealth of resources tailored to help you thrive in your career.
        </p>
      </div>
      <footer className="profile-footer">
        <p>&copy; 2023 Placement Portal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Profile;
