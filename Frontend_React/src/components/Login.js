import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import '../css/Login.css';

function Login() {
  const [formData, setFormData] = useState({
    userId: '', 
    password: '',
    type: 'ADMIN', // Default user_type
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage(''); // it Clears error message on input change to avoid old error display
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sending the login request to the backend part
      const response = await axios.post('http://localhost:8080/api/login', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        const user = response.data;
        // Check if user type is COLLEGE/UNIVERSITY
        if (user.type === 'COLLEGE') {
          localStorage.setItem('loggedInUser', JSON.stringify(user));
          navigate('/profile'); // Navigate to profile if user type is valid
        } else {
          setErrorMessage('Invalid credentials. You are not authorized to access this page.');
        }
      }
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <header className="login-navbar">
        <button className="home-button" onClick={() => navigate('/')}>Home</button>
        <h1 className="logo">Welcome to Career Growth</h1>
      </header>

      <main className="login-content">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <label>User ID:</label>
          <input
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            required
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <br />
          <label>Type:</label>
          <select name="type" value={formData.type} onChange={handleChange}>
            <option value="ADMIN">Admin</option>
            <option value="COLLEGE">College/University</option>
            <option value="CORPORATE">Corporate</option>
          </select>
          <br /><br/>
          <button type="submit">Login</button>
        </form>
        
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </main>
      <footer className="footer">
        <p>&copy; 2023 Placement Portal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Login;
