import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DepartmentDetailPage = ({ match }) => {
  const [department, setDepartment] = useState(null);

  useEffect(() => {
    const fetchDepartment = async () => {
      try {
        const response = await axios.get(`/api/departments/${match.params.id}`);
        setDepartment(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDepartment();
  }, [match.params.id]);

  if (!department) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{department.name}</h1>
      <p>Number of Employees: {department.num_employees}</p>
    </div>
  );
};

export default DepartmentDetailPage;
