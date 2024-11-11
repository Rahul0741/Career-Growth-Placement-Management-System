import React, { useState } from 'react';
import axios from 'axios';
import '../css/Profile.css';

const RetrieveUser = ({ closeModal }) => {
  const [userId, setUserId] = useState('');
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setUserId(e.target.value);
  };

  const handleRetrieve = async () => {
    setError(''); // Resets any previous error present
    try {
      const response = await axios.get(`http://localhost:8080/api/user/${userId}`);

      if (response.status === 200) {
        setUserDetails(response.data);
      } else {
        setUserDetails(null);
        setError('User not found');
      }
    } catch (error) {
      setUserDetails(null);
      setError('Error: ' + error.message);
    }
  };

  return (
    <section>
      <h3>Retrieve User Details</h3>

      <input
        type="number"
        placeholder="Enter User ID"
        onChange={handleChange}
        required
      />
      <button onClick={handleRetrieve}>Retrieve</button>

      {error && <p className="error">{error}</p>}

      {userDetails && (
        <div>
          <h4>User Details:</h4>
          <p>ID: {userDetails.userId}</p>
          <p>Username: {userDetails.username}</p>
          <p>User Type: {userDetails.userType}</p>
        </div>
      )}
    </section>
  );
};

export default RetrieveUser;
