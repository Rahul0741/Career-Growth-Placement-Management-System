import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/SignUp.css';

const Signup = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    userId: '',
    name: '',
    password: '',
    type: 'ADMIN',
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/signup', userData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      alert(response.data);
      navigate('/login');
    } catch (error) {
      console.error('There was an error!', error.message);
    }
  };

  return (
    <div className="signup-container">
      <header className="signup-navbar">
        <button className="home-button" onClick={() => navigate('/')}>Home</button> 
        <i class="fa-solid fa-house-chimney-user"></i>
        <h1 className="logo">Welcome to Career Growth </h1>
      </header>

      <main className="signup-content">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <label>User ID:</label>
          <input
            type="text"
            name="userId"
            value={userData.userId}
            onChange={handleChange}
            required
          /><br />

          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          /><br />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
          /><br />

          <label>Type:</label>
          <select name="type" value={userData.type} onChange={handleChange}>
            <option value="ADMIN">Admin</option>
            <option value="COLLEGE">College/University</option>
            <option value="CORPORATE">Corporate</option>
          </select><br /><br />

          <button type="submit">Signup</button>
        </form>
        <p>
          Already a user? <Link to="/login">Login</Link>
        </p>
      </main>

      <footer className="footer">
        <p>&copy; 2023 Placement Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Signup;
