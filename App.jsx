import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import EmployeeList from './components/EmployeeList';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
