import React, { useState } from 'react';
import axios from 'axios';
import '../css/Profile.css';

const UpdateUser = ({ closeModal }) => {
  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState({
    username: '',
    userType: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleRetrieve = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/user/${userId}`);

      if (response.status === 200) {
        setUserData({
          username: response.data.username,
          userType: response.data.userType,
          password: '' // Leaving password empty for security reasons
        });
      } else {
        alert('User not found');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Debug log
    console.log("User Data being sent:", {
        username: userData.username,
        userType: userData.userType,
        password: userData.password
    });

    try {
        const response = await axios.put(`http://localhost:8080/api/updateUser/${userId}`,null, {
          params:{
            username: userData.username,
            userType: userData.userType,
            password: userData.password
          }
        });

        if (response.status === 200) {
            alert('User updated successfully!');
            closeModal();
        } else {
            alert('Failed to update User');
        }
    } catch (error) {
        console.error("Error updating user:", error.response.data);
        alert('Error: ' + error.response.data.error);
    }
};


  return (
    <section>
      <h3>Update User Details</h3>
      <label>User ID: </label>
      <input
        type="number"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        required
      />
      <button onClick={handleRetrieve}>Retrieve</button>

      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleChange}
          required
        /><br /><br />

        <label>User Type:</label>
        <input
          type="text"
          name="userType" 
          value={userData.userType}
          onChange={handleChange}
          required
        /><br /><br />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        /><br /><br />

        <button type="submit">Update User</button>
      </form>
    </section>
  );
};

export default UpdateUser; 