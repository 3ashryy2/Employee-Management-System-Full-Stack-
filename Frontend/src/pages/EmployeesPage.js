import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeesPage = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('/api/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEmployees();
  }, []);

  return (
    <div>
      <h1>Employees</h1>
      <button onClick={() => window.location.href = '/employee/create'}>Create New Employee</button>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name}
            <button onClick={() => window.location.href = `/employee/${employee.id}`}>View</button>
            <button onClick={() => window.location.href = `/employee/edit/${employee.id}`}>Edit</button>
            <button onClick={() => axios.delete(`/api/employees/${employee.id}`).then(() => setEmployees(employees.filter(e => e.id !== employee.id)))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeesPage;
