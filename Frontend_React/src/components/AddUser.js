import React, { useState } from 'react';
import axios from 'axios';
import '../css/Profile.css';

const AddUser = ({ closeModal }) => {
  const [userData, setUserData] = useState({
    user_id: '',
    username: '',
    user_type: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/addUser', null, {
        params: {
          user_id: userData.user_id,
          username: userData.username,
          user_type: userData.user_type,
          password: userData.password
        }
      });

      if (response.status === 201) {
        alert('User added successfully!');
        closeModal();
      } else {
        alert('Failed to add user');
      }
    } catch (error) {
      alert('Error: ' + (error.response ? error.response.data : error.message));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>User Id:</label>
      <input type="number" name="user_id" onChange={handleChange} required /><br />
      <label>Name:</label>
      <input type="text" name="username" onChange={handleChange} required /><br />
      <label>UserType:</label>
      <input type="text" name="user_type" onChange={handleChange} required /><br />
      <label>Password:</label>
      <input type="password" name="password" onChange={handleChange} /><br />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser; 