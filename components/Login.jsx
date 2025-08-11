import React, { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/employee/login', { username, password });
      localStorage.setItem('token', res.data.token);
      navigate('/employees');
    } catch (err) {
      alert('Login failed!');
    }
  };

  return (
    <form onSubmit={loginUser}>
      <h2>Login</h2>
      <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}
