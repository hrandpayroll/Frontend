import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api';

export default function Profile() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    API.get(`/employee/${id}`).then((res) => setEmployee(res.data));
  }, [id]);

  if (!employee) return <p>Loading...</p>;

  return (
    <div>
      <h2>{employee.name}'s Profile</h2>
      <p>Email: {employee.email}</p>
      <p>Role: {employee.role}</p>
      <p>Department: {employee.department}</p>
    </div>
  );
}
