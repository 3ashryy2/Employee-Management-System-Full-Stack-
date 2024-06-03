import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeDetailPage = ({ match }) => {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`/api/employees/${match.params.id}`);
        setEmployee(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEmployee();
  }, [match.params.id]);

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{employee.name}</h1>
      <p>Email: {employee.email}</p>
      <p>Mobile Number: {employee.mobile_number}</p>
      <p>Designation: {employee.designation}</p>
      <p>Hired On: {employee.hired_on}</p>
      <p>Days Employed: {employee.days_employed}</p>
      <p>Company: {employee.company.name}</p>
      <p>Department: {employee.department.name}</p>
    </div>
  );
};

export default EmployeeDetailPage;
