import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddUser from './AddUser';
import RetrieveUser from './RetrieveUser';
import UpdateUser from './UpdateUser';
import DeleteUser from './DeleteUser';
import axios from 'axios';
import '../css/UserDashboard.css';

const UserDashBoard = () => {
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState(null);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const openModal = (modalName) => setActiveModal(modalName);

  const closeModal = () => {
    setActiveModal(null);
    setSelectedUser(null);
  };

  const handleHomeRedirect = () => navigate('/profile');

  // Fetches all user from the server
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8080/api/users');
      if (response.status === 200) {
        setUsers(response.data);
      }
    } catch (error) {
      setError('Error fetching users');
      console.error('Error fetching users:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [users]);

  return (
    <div className="user-dashboard">
      <header>
        <h2>User Dashboard</h2>
        <div className="button-container">
          <button onClick={handleHomeRedirect} className="home-button">Back</button>
          <button onClick={() => openModal('add')}>Add User</button>
          <button onClick={() => openModal('retrieve')}>Retrieve User</button>
          <button onClick={() => openModal('update')}>Update User</button>
          <button onClick={() => openModal('delete')}>Delete User</button>
        </div>
      </header>
  
      {loading && <p></p>}
      {error && <p className="error">{error}</p>}

      {activeModal && (
        <div className="modal">
          <div className="modal-content">
            {activeModal === 'add' && <AddUser closeModal={closeModal} />}
            {activeModal === 'retrieve' && <RetrieveUser closeModal={closeModal} />}
            {activeModal === 'update' && <UpdateUser closeModal={closeModal} />}
            {activeModal === 'delete' && <DeleteUser closeModal={closeModal} />}
            <button onClick={closeModal} className="close-modal">Close</button>
          </div>
        </div>
      )}

      <div className="user-table">
        <h3>User Details</h3>
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Username</th>
              <th>User Type</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.userId}>
                <td>{user.userId}</td>
                <td>{user.username}</td>
                <td>{user.userType}</td>
                <td>{'*'.repeat(user.password ? user.password.length : 8)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="user-footer">
        <p>&copy; 2023 Placement Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default UserDashBoard;
