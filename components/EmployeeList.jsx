import React, { useEffect, useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get('/employee')
      .then((res) => setEmployees(res.data))
      .catch((err) => {
        alert('Unauthorized. Redirecting...');
        navigate('/');
      });
  }, [navigate]);

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((emp) => (
          <li key={emp.id} onClick={() => navigate(`/profile/${emp.id}`)}>
            {emp.name} - {emp.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
