import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DepartmentsPage = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get('/api/departments');
        setDepartments(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDepartments();
  }, []);

  return (
    <div>
      <h1>Departments</h1>
      <ul>
        {departments.map((department) => (
          <li key={department.id}>
            {department.name}
            <button onClick={() => window.location.href = `/department/${department.id}`}>View</button>
            <button onClick={() => window.location.href = `/department/edit/${department.id}`}>Edit</button>
            <button onClick={() => axios.delete(`/api/departments/${department.id}`).then(() => setDepartments(departments.filter(d => d.id !== department.id)))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DepartmentsPage;
