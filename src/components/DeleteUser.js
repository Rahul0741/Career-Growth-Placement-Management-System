import React, { useState } from 'react';
import axios from 'axios';
import '../css/Profile.css';

const DeleteUser = ({ closeModal }) => {
  const [userId, setUserId] = useState('');

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/deleteUser/${userId}`);

      if (response.status === 200) {
        alert('User deleted successfully!');
        closeModal();
      } else {
        alert('Failed to delete user');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <section>
      <h3>Delete User</h3>

      <input
        type="number"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        required
      />
      <button onClick={handleDelete}>Delete</button>
    </section>
  );
};

export default DeleteUser;
