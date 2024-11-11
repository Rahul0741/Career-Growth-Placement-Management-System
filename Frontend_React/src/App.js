import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import UserDashBoard from './components/UserDashBoard';
import AddUser from './components/AddUser';
import RetrieveUser from './components/RetrieveUser';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';
import Profile from './components/Profile';
import FAQ from './components/FAQ';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        
        <Route path="/user-dashboard" element={<UserDashBoard />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/retrieve-user" element={<RetrieveUser />} />
        <Route path="/update-user" element={<UpdateUser />} />
        <Route path="/delete-user" element={<DeleteUser />} />

        <Route path="/faq" element={<FAQ/>}/>
      </Routes>
    </Router>
  );
}

export default App;