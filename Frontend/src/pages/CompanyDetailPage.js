import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CompanyDetailPage = ({ match }) => {
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const response = await axios.get(`/api/companies/${match.params.id}`);
        setCompany(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCompany();
  }, [match.params.id]);

  if (!company) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{company.name}</h1>
      <p>Number of Departments: {company.num_departments}</p>
      <p>Number of Employees: {company.num_employees}</p>
    </div>
  );
};

export default CompanyDetailPage;
